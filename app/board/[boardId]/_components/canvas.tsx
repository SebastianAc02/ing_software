"use client";

import { useState } from "react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

const p: string = `¡Únete a Nuestro Equipo como Desarrollador Frontend!

¿Apasionado por crear experiencias de usuario excepcionales? En [Nombre de la Empresa], buscamos un Desarrollador Frontend talentoso para llevar nuestras ideas digitales al siguiente nivel.

Responsabilidades:

- Diseñar y desarrollar interfaces responsivas usando HTML5, CSS3 y JavaScript.
- Colaborar con diseñadores y desarrolladores backend para implementar funcionalidades.
- Optimizar el rendimiento de las aplicaciones en todos los dispositivos y navegadores.
- Mantener un código limpio y de alta calidad.
Requisitos:

- Mínimo 2 años de experiencia en desarrollo frontend.
- Dominio de frameworks modernos como React, Vue o Angular.
- Buen entendimiento de principios de UI/UX.
- Habilidad para resolver problemas y trabajar en equipo.
Ofrecemos:

- Salario competitivo y bonificaciones.
- Horarios flexibles y opción de trabajo remoto.
- Oportunidades de crecimiento profesional.
- Beneficios de salud y bienestar.
- Ambiente inclusivo y colaborativo.
¿Listo para crecer con nosotros? Envía tu CV y portafolio a [email@example.com] o visita [www.tuempresa.com/carreras].

[Nombre de la Empresa] es un empleador que promueve la igualdad de oportunidades. Valoramos la diversidad y fomentamos un entorno inclusivo para todos.`;

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  // State management for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobsToBeDone, setJobsToBeDone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías manejar el envío de datos, por ejemplo, enviarlos a una API

    // Limpiar los campos del formulario
    setTitle('');
    setDescription('');
    setJobsToBeDone('');

    // Marcar el formulario como enviado
    setIsSubmitted(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-indigo-50 to-purple-100 p-4 rounded-lg flex items-center justify-center">
      <Info />
      <Participants />

      {/* Form Card or Submitted Content */}
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-2xl transition-all duration-500">
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Project Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter project title"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter project description"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Jobs to Be Done</label>
                <textarea
                  value={jobsToBeDone}
                  onChange={(e) => setJobsToBeDone(e.target.value)}
                  placeholder="List tasks or jobs to be completed"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  rows={2}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-semibold"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">¡Oferta de Trabajo Enviada!</h2>
            <div className="bg-indigo-50 p-4 rounded-md shadow-inner overflow-y-auto max-h-96">
              <pre className="whitespace-pre-wrap text-gray-700">{p}</pre>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-semibold"
            >
              Crear Otra Oferta
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
