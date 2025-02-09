export default async function Introduction() {
    const res = await fetch('http://localhost:1337/api/pages?populate=*', {
      next: { revalidate: 10 }, 
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await res.json(); 
    const pages = data.data;
  
    return ( 
    
     <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {pages.map((page) => (
          <div
            key={page.id}
            className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full mb-8"
          >
            <h1 className="text-3xl font-bold text-center mb-4">{page.title}</h1>
            {page.image && page.image.formats && (
              <div className="flex justify-center mb-6">
                <img
                  src={`http://localhost:1337${page.image.formats.medium.url}`}
                  alt={page.image.name || 'Image'}
                  className="rounded-full w-48 h-48 object-cover"
                />
              </div>
            )}
            <div className="text-center">
              <p className="text-lg font-medium mb-4">{page.description}</p>
              <p className="text-gray-700 text-justify">{page.descriptiontext}</p>
            </div>
          </div>
        ))}
      </div>
    
     </>
    );
      
  }
  