document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('blogForm');
  const snippetsContainer = document.getElementById('snippets');

  // Fake Data (for demonstration)
  const posts = [
    {
      title: 'Sample Post 1',
      slug: 'sample-post-1',
      tags: 'example, post',
      category: 'Tutorial',
      body: 'This is a sample post body content.',
      author: 'Author 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Sample Post 2',
      slug: 'sample-post-2',
      tags: 'blog, sample',
      category: 'Tech',
      body: 'Another sample post with some content.',
      author: 'Author 2',
      image: 'https://via.placeholder.com/150'
    }
  ];

  // Render Fake Data
  posts.forEach(post => renderSnippet(post));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newPost = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      tags: formData.get('tags'),
      category: formData.get('category'),
      body: formData.get('bodypost'),
      author: formData.get('author'),
      image: URL.createObjectURL(formData.get('imagefile'))
    };

    renderSnippet(newPost);
    form.reset();
  });

  function renderSnippet(post) {
    const snippet = document.createElement('div');
    snippet.className = 'snippet';
    snippet.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h3>${post.title}</h3>
      <p><strong>Slug:</strong> ${post.slug}</p>
      <p><strong>Tags:</strong> ${post.tags}</p>
      <p><strong>Category:</strong> ${post.category}</p>
      <p>${post.body}</p>
      <p><em>Author: ${post.author}</em></p>
    `;
    snippetsContainer.appendChild(snippet);
  }
});
