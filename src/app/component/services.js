export default async function Services() {
    const res = await fetch('http://localhost:1337/api/servicos?populate=*', {
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json(); // Dados da API
    const services = data.data;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-2xl shadow-lg p-6 max-w-sm flex flex-col items-center"
                    >
                        {/* Imagem */}
                        <img
                            src={`http://localhost:1337${service.image?.formats?.medium?.url || service.image?.url}`}
                            alt={service.image?.alternativeText || service.title}
                            className="rounded-xl w-full h-48 object-cover mb-4"
                        />
                        {/* Título */}
                        <h2 className="text-xl font-semibold text-center mb-2">{service.title}</h2>
                        {/* Descrição */}
                        <p className="text-gray-600 text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
