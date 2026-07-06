
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { fallbackBooks } from "../data/fallbackBooks";
import ShelfBook from "./ShelfBook";
import BookDetails from "./BookDetails";
import { useState, useRef } from "react";

export default function BookShelf() {
  const books = fallbackBooks;
  const detailsRef = useRef(null);

  const [selectedBook, setSelectedBook] = useState(null);

  // More books later? Just increase this number.
  const TOTAL_SLOTS = books.length;

  const rotations = [-5, 3, -2, 4, -4, 2];
  const heights = [270, 255, 285, 265, 280, 260];

  return (
    <LayoutGroup>
      <section
        id="books"
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#F8F4EC 0%,#F3E6D0 100%)",
        }}
      >
        {/* Warm Lighting */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-yellow-100/30 blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-orange-100/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-8">

          {/* Heading */}

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-amber-700 text-sm">

              Book Shelf

            </span>

            <h2 className="font-display text-5xl mt-4 text-amber-950">

              Pick a book, click to view details

            </h2>

          </div>

          {/* Shelf */}

          <div
            className="relative rounded-2xl p-12"
            style={{
              background:
                "linear-gradient(180deg,#8B5A2B,#74421F)",
              boxShadow:
                "inset 0 8px 15px rgba(255,255,255,.12), inset 0 -10px 15px rgba(0,0,0,.35)",
            }}
          >
            {/* Wood Grain */}

            <div
              className="absolute inset-0 rounded-2xl opacity-20"
              style={{
                backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  rgba(255,255,255,.05),
                  rgba(255,255,255,.05) 3px,
                  transparent 4px,
                  transparent 12px
                )
              `,
              }}
            />

            {/* Shelf */}

            <div className="overflow-x-auto pb-4 scrollbar-hide">

<div
  className="
    relative
    flex
    items-end
    gap-8
    min-h-[360px]
    w-max
    px-4
    pb-6
  "
>

              {Array.from({ length: TOTAL_SLOTS }).map((_, index) => {
                const book = books[index];

                if (book) {

                  if (selectedBook?.id === book.id) {
                
                    return (
                      <div
                        key={book.id}
                        className="w-40 h-[285px]"
                      />
                    );
                
                  }
                
                  return (
                    <ShelfBook
  key={book.id}
  book={book}
  selected={selectedBook?.id === book.id}
  onClick={(book) => {
    setSelectedBook(book);
  
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 250);
  }}
  rotation={rotations[index % rotations.length]}
  height={heights[index % heights.length]}
/>
                  );
                }

                // Empty slot
                return (
                  <div
                    key={`empty-${index}`}
                    className="w-40 h-[285px] rounded-md"
                    style={{
                      background:
                        "linear-gradient(180deg,#A56A3A,#8A542A)",
                      opacity: 0.15,
                    }}
                  />
                );
                
              })}
            </div>

            </div> {/* shelf inner flex */}
          </div> {/* shelf container (wood) */}

          {/* Wooden plank */}
          <div
            className="mt-6 h-5 rounded"
            style={{
              background:
                "linear-gradient(180deg,#73411C,#4F2C14)",
            }}
          />

          {/* Details */}
          <div ref={detailsRef}>
            <AnimatePresence>
              {selectedBook && (
                <BookDetails
                  book={selectedBook}
                  onClose={() => {
                    setSelectedBook(null);

                    setTimeout(() => {
                      detailsRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }, 150);
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div> {/* max-w container */}
      </section>
    </LayoutGroup>
    
  );
}