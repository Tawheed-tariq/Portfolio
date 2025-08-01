import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Card({ title, Desc, from, to, img_url, grade, index, organization }) {
  useEffect(() => {
    Aos.init({ duration: 900, anchorPlacement: "top-center" });
  }, []);
  
  return (
    <div 
      data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
      className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 max-w-[800px] mx-4 my-6 rounded-2xl border border-gray-100 hover:border-gray-200"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-xl bg-white p-2 flex items-center justify-center">
                <img 
                  src={img_url} 
                  alt={title}
                  className="w-8 h-8 object-contain" 
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight mb-1 group-hover:text-gray-900 transition-colors duration-300">
              {title}
            </h1>
            {organization && (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-blue-800 mb-2">
                {organization}
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {Desc}
          </p>
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">{from} - {to}</span>
          </div>
          
          {grade && (
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-xs font-semibold text-green-800">
                <span className="opacity-75">Grade:</span> {grade}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full"></div>
    </div>
  );
}

