import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.example.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Category",
          "item": "https://www.example.com/category"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Product",
          "item": "https://www.example.com/category/product"
        }
      ]
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.innerHTML = JSON.stringify(breadcrumbData);
    document.head.appendChild(scriptTag);
    return () => {
      document.head.removeChild(scriptTag);
    };
  }, []);

  return null; 
};

export default SchemaMarkup;
