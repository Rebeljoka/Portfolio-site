import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
	const get = () => values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

	const [value, setValue] = useState<number>(get);

	useEffect(() => {
		const handler = () => setValue(get);
		queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
		return () => queries.forEach((q) => matchMedia(q).removeEventListener("change", handler));
	}, [queries]);

	return value;
};

const useMeasure = <T extends HTMLElement>() => {
	const ref = useRef<T | null>(null);
	const [size, setSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		if (!ref.current) return;
		const ro = new ResizeObserver(([entry]) => {
			const { width, height } = entry.contentRect;
			setSize({ width, height });
		});
		ro.observe(ref.current);
		return () => ro.disconnect();
	}, []);

	return [ref, size] as const;
};

interface ImageMeta {
	width: number;
	height: number;
}

const preloadImagesWithMeta = async (urls: string[]): Promise<Record<string, ImageMeta>> => {
	const entries = await Promise.all(
		urls.map(
			(src) =>
				new Promise<[string, ImageMeta]>((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve([src, { width: img.naturalWidth || 1, height: img.naturalHeight || 1 }]);
					img.onerror = () => resolve([src, { width: 1, height: 1 }]);
				}),
		),
	);

	return Object.fromEntries(entries);
};

interface Item {
	id: string;
	img: string;
	url?: string;
	height?: number;
}

interface GridItem extends Item {
	x: number;
	y: number;
	w: number;
	h: number;
}

interface MasonryProps {
	items: Item[];
	ease?: string;
	duration?: number;
	stagger?: number;
	animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
	scaleOnHover?: boolean;
	hoverScale?: number;
	blurToFocus?: boolean;
	colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({ items, ease = "power3.out", duration = 0.6, stagger = 0.05, animateFrom = "bottom", scaleOnHover = true, hoverScale = 0.95, blurToFocus = true, colorShiftOnHover = false }) => {
	const requestedColumns = useMedia(
		["(min-width:1536px)", "(min-width:1280px)", "(min-width:1024px)", "(min-width:768px)", "(min-width:480px)"],
		[5, 4, 3, 2, 1],
		1,
	);

	const [containerRef, { width }] = useMeasure<HTMLDivElement>();
	const [imagesReady, setImagesReady] = useState(false);
	const [imageMetaBySrc, setImageMetaBySrc] = useState<Record<string, ImageMeta>>({});

	const getInitialPosition = (item: GridItem) => {
		const containerRect = containerRef.current?.getBoundingClientRect();
		if (!containerRect) return { x: item.x, y: item.y };

		let direction = animateFrom;
		if (animateFrom === "random") {
			const dirs = ["top", "bottom", "left", "right"];
			direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
		}

		switch (direction) {
			case "top":
				return { x: item.x, y: -200 };
			case "bottom":
				return { x: item.x, y: window.innerHeight + 200 };
			case "left":
				return { x: -200, y: item.y };
			case "right":
				return { x: window.innerWidth + 200, y: item.y };
			case "center":
				return {
					x: containerRect.width / 2 - item.w / 2,
					y: containerRect.height / 2 - item.h / 2,
				};
			default:
				return { x: item.x, y: item.y + 100 };
		}
	};

	useEffect(() => {
		preloadImagesWithMeta(items.map((i) => i.img)).then((meta) => {
			setImageMetaBySrc(meta);
			setImagesReady(true);
		});
	}, [items]);

	const grid = useMemo<GridItem[]>(() => {
		if (!width) return [];
		const gap = 16;
		const minColumnWidth = 240;
		const maxColumnsByWidth = Math.max(1, Math.floor((width + gap) / (minColumnWidth + gap)));
		const columns = Math.min(requestedColumns, maxColumnsByWidth);
		const colHeights = new Array(columns).fill(0);
		const totalGaps = (columns - 1) * gap;
		const columnWidth = (width - totalGaps) / columns;

		return items.map((child) => {
			const col = colHeights.indexOf(Math.min(...colHeights));
			const x = col * (columnWidth + gap);
			const meta = imageMetaBySrc[child.img];
			const ratioFromMeta = meta ? meta.height / meta.width : undefined;
			const fallbackRatio = child.height ? child.height / 300 : 1;
			const height = columnWidth * (ratioFromMeta ?? fallbackRatio);
			const y = colHeights[col];

			colHeights[col] += height + gap;
			return { ...child, x, y, w: columnWidth, h: height };
		});
	}, [requestedColumns, items, width, imageMetaBySrc]);

	let masonryWrapperStyle: React.CSSProperties | undefined;
	// BEGIN OPTIONAL MASONRY FLOW-HEIGHT PATCH (safe to delete this whole block)
	// Absolute-positioned tiles don't affect parent height, so this computes a real
	// wrapper height to keep following sections (like headings) below masonry.
	if (grid.length) {
		const contentHeight = Math.max(...grid.map((item) => item.y + item.h));
		masonryWrapperStyle = { height: contentHeight };
	}
	// END OPTIONAL MASONRY FLOW-HEIGHT PATCH

	const hasMounted = useRef(false);

	useLayoutEffect(() => {
		if (!imagesReady) return;

		grid.forEach((item, index) => {
			const selector = `[data-key="${item.id}"]`;
			const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

			if (!hasMounted.current) {
				const start = getInitialPosition(item);
				gsap.fromTo(
					selector,
					{
						opacity: 0,
						x: start.x,
						y: start.y,
						width: item.w,
						height: item.h,
						...(blurToFocus && { filter: "blur(10px)" }),
					},
					{
						opacity: 1,
						...animProps,
						...(blurToFocus && { filter: "blur(0px)" }),
						duration: 0.8,
						ease: "power3.out",
						delay: index * stagger,
					},
				);
			} else {
				gsap.to(selector, {
					...animProps,
					duration,
					ease,
					overwrite: "auto",
				});
			}
		});

		hasMounted.current = true;
	}, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

	const handleMouseEnter = (id: string, element: HTMLElement) => {
		if (scaleOnHover) {
			gsap.to(`[data-key="${id}"]`, {
				scale: hoverScale,
				duration: 0.3,
				ease: "power2.out",
			});
		}
		if (colorShiftOnHover) {
			const overlay = element.querySelector(".color-overlay") as HTMLElement;
			if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
		}
	};

	const handleMouseLeave = (id: string, element: HTMLElement) => {
		if (scaleOnHover) {
			gsap.to(`[data-key="${id}"]`, {
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
			});
		}
		if (colorShiftOnHover) {
			const overlay = element.querySelector(".color-overlay") as HTMLElement;
			if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
		}
	};

	return (
		<div ref={containerRef} className="relative w-full h-full" style={masonryWrapperStyle}>
			{grid.map((item) => (
				<div key={item.id} data-key={item.id} className="absolute box-content" style={{ willChange: "transform, width, height, opacity" }} onClick={() => item.url && window.open(item.url, "_blank", "noopener")} onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)} onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}>
					<div className="relative w-full h-full bg-contain bg-center bg-no-repeat rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]" style={{ backgroundImage: `url(${item.img})` }}>
						{colorShiftOnHover && <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />}
					</div>
				</div>
			))}
		</div>
	);
};

export default Masonry;
