
import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (ids: string[], options?: IntersectionObserverInit) => {
    const [activeId, setActiveId] = useState<string>('');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const elements = ids.map(id => document.getElementById(id)).filter(el => el !== null) as HTMLElement[];

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, options);

        elements.forEach(el => {
            if(observer.current) {
                observer.current.observe(el);
            }
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [ids, options]);

    return activeId;
};
