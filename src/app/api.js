export async function fetchPosts() {
    const res = await fetch("http://localhost:1337/api/digitals");
    if (!res.ok) {
      throw new Error(`Erro na busca: ${res.status}`);
    }
    const data = await res.json();
    return data;
  }
  