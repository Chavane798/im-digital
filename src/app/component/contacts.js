export default async function Contacts() {
  const res = await fetch("http://localhost:1337/api/contactos?populate=*", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const contacts = data.data;

  return (
    <>
      
        <div className="container mx-auto flex flex-wrap justify-center m-8 rounded-lg shadow-lg">
          {/* Seção de contatos */}
          <div className="w-full sm:w-1/2 text-center">
            <h3 className="text-lg font-semibold">Informações de Contato</h3>
            <ul className="space-y-4">
              {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className="bg-white p-4"
                >
                  <h4 className="text-lg font-semibold">{contact.title}</h4>
                  <p className="text-gray-600">
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p className="text-gray-600">
                    <strong>Telefone:</strong> {contact.number}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  );
}
