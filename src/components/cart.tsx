import { useEffect, useRef, useState } from "react";
import { ShoppingBag, X } from "lucide-react";

type CartItem = {
  name: string;
  image: string;
  price: string;
  quantity: number;
};

export function Cart({
  items,
  onRemove,
}: {
  items: CartItem[];
  onRemove: (image: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (!open) return;
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !container.current?.contains(event.target))
        setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={container} className="relative">
      <button
        ref={trigger}
        type="button"
        aria-label={`Shopping bag, ${count} ${count === 1 ? "item" : "items"}`}
        aria-expanded={open}
        aria-controls="shopping-bag"
        onClick={() => setOpen((value) => !value)}
        className="relative flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        <ShoppingBag className="size-6" aria-hidden="true" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 flex min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] leading-5 font-bold text-accent-foreground">
            {count}
          </span>
        )}
      </button>
      <p role="status" className="sr-only">
        {count} {count === 1 ? "item" : "items"} in your bag.
      </p>
      {open && (
        <section
          id="shopping-bag"
          aria-label="Shopping bag contents"
          className="absolute top-full right-0 z-30 mt-4 w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <h2 className="font-display text-lg font-semibold">Your bag ({count})</h2>
            <button
              type="button"
              aria-label="Close bag"
              onClick={() => {
                setOpen(false);
                trigger.current?.focus();
              }}
              className="flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-secondary"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          {items.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Your bag is empty.
            </p>
          ) : (
            <ul className="max-h-[min(24rem,60dvh)] overflow-y-auto p-4">
              {items.map((item) => (
                <li
                  key={item.image}
                  className="flex items-start gap-3 border-b border-border py-3 first:pt-0 last:border-0 last:pb-0"
                >
                  <img
                    src={item.image}
                    alt=""
                    width={64}
                    height={64}
                    className="size-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.price} × {item.quantity}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => onRemove(item.image)}
                    className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-secondary"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
