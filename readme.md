# base-11ty-tailwind



# Chargement de polices de caractères
 1. ## Importer la polices de caractères
    Dans fichier CSS tailwind ("src/assets/css/tailwind.css") importer les polices depuis "google fonts"
    - Aller sur le site de google fonts ("https://fonts.google.com/")
    - Générer et copier la requête (ex: "https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap")
    - Importer la requête (ex: "@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");")

  2. ## Inscrire la polices de caractères
      Dans le fichier de configuration ("tailwind.config.js")
      ```
        ...
        theme: {
          fontFamily: {
            ...
            josefin: ['"Josefin Sans"', 'sans-serif'],
          },
          ...
        },
        ...
      ```

  3. ## Utiliser la polices de caractères
      Au sein de l'HTML
        ``` 
          ...  class="font-josefin" ... 
        ```
    
   

