import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { transcendenceSlides } from '../slides/trascendenciaSlides';

const TranscendenceSlides: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = transcendenceSlides.length;
  const currentSlide = useMemo(() => transcendenceSlides[currentIndex], [currentIndex]);
  const progress = ((currentIndex + 1) / totalSlides) * 100;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => Math.min(totalSlides - 1, index + 1));
  }, [totalSlides]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      }
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goToNext, goToPrevious]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 text-stone-900">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-900 transition-colors"
            >
              <Home className="h-4 w-4" />
              Volver a la página principal
            </Link>
            <div className="text-sm text-stone-600">
              Slide <span className="font-semibold text-orange-700">{currentIndex + 1}</span> de {totalSlides}
            </div>
          </div>

          <div className="h-2 w-full rounded-full bg-orange-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-rose-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <article className="bg-white/90 backdrop-blur-sm shadow-xl shadow-orange-100 rounded-3xl border border-orange-100 overflow-hidden">
            <div className="relative px-6 sm:px-10 py-10">
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-br from-orange-200 via-transparent to-rose-200" />
              <div className="relative flex flex-col gap-8">
                <header className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    {currentSlide.icon && (
                      <span className="text-4xl" aria-hidden>{currentSlide.icon}</span>
                    )}
                    <span className="uppercase tracking-[0.35em] text-xs text-orange-600 font-semibold">
                      {`Slide ${currentSlide.id.toString().padStart(2, '0')}`}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-[2.35rem] font-bold text-orange-950 leading-tight">
                    {currentSlide.title}
                  </h1>
                  {currentSlide.subtitle && (
                    <p className="text-lg text-stone-600 font-medium">{currentSlide.subtitle}</p>
                  )}
                </header>

                {currentSlide.highlight && (
                  <blockquote className="border-l-4 border-orange-400 pl-4 sm:pl-6 text-xl sm:text-2xl font-semibold text-orange-800 italic">
                    {currentSlide.highlight}
                  </blockquote>
                )}

                {currentSlide.points && currentSlide.points.length > 0 && (
                  <ul className="space-y-4 text-base sm:text-lg text-stone-700">
                    {currentSlide.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-rose-400" aria-hidden />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(currentSlide.visuals && currentSlide.visuals.length > 0) && (
                  <div className="rounded-2xl border border-dashed border-rose-200 bg-rose-50/70 p-5">
                    <p className="text-sm font-semibold uppercase tracking-widest text-rose-400 mb-3">
                      Sugerencias visuales
                    </p>
                    <ul className="space-y-2 text-sm text-rose-800">
                      {currentSlide.visuals.map((visual) => (
                        <li key={visual} className="leading-relaxed">{visual}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(currentSlide.notes && currentSlide.notes.length > 0) && (
                  <div className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/70 p-5">
                    <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
                      Notas clave
                    </p>
                    <ul className="space-y-2 text-sm text-orange-800">
                      {currentSlide.notes.map((note) => (
                        <li key={note} className="leading-relaxed">{note}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </article>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-xs text-stone-500">
              Usa las flechas del teclado o los botones para navegar.
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-5 py-2 text-sm font-semibold text-orange-700 transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-100"
              >
                <ArrowLeft className="h-4 w-4" />
                Anterior
              </button>
              <button
                type="button"
                onClick={goToNext}
                disabled={currentIndex === totalSlides - 1}
                className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-500/90 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-rose-500 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Siguiente
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscendenceSlides;
