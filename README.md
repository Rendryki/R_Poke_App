# **POKEAPP** <img src='https://user-images.githubusercontent.com/104596352/232617932-e529531b-1e7e-4706-84fe-2d8e1c7b5f36.png' width=20px>

This project is a Single Page Application developed in React, using Next.js!

## How does it works?

The main goal for this application was to deliver information about Pokémons and items from the Pokémon world.

In the homepage, there is a 'welcome' message fastly explaining some stuff about the App. 

The Pokedex page shows to the user all of the 1251 Pokémons that exists untill now. It splits this huge amount of Pokémons in pages with 20 pokemons each. It is possible to change through page by changind the page offset. When clicking on the wished Pokémon, the page will show more detailled information about the chosen one, like the Type, Health Points and Speed of the Pokémon.

The PokeItens page will be divided in two sections. The first one is the Pokeballs section, where is possible to see almost every existing Pokeball, and just like the Pokedex, If the user clicks in the wished Pokeball, it will be delivered more info, like which category the Pokeball belongs and the effect the Pokeball cause.

Last but not least. The second section in PokeItens page is some other itens from Pokemon universe. In that page, the user may find some Healing itens, Berryes and Battle Itens. Also, just like the other two pages before, if the uses clicks in one of the itens shown, the page will deliver more detailed info, like the item category and the description of the item effects.

## How was it developed? 

It was totally developed using React, through it's Framework Next.js. The SPA uses some of the Next.js tools. Like Routing and SSG.

The Pokedex Page fetches the data in the Client-Side. Each fetch get the data of the 20 pokemons showed in page. If the page offset changes, the SPA refetches the data from the next 20 Pokémons rendered. And so it goes, till the last one. When the user clicks on each Pokémon, the Application fetches each Pokémon detailed data also in the Client-Side, using the dinamic routes concept delivered by the Next.js Framework.

Differently from the previously explained page. Both the PokeItens page sections generates their data through a Server-Side-Generation. All the Pokeballs, Healing Itens, Berries and Battle Itens are previously fetched through the SSG. When the uses goes to the desired page and clicks over a Pokeball or Item, the detailed data is also Server Side Generated. So, that part of the SPA uses both the SSG and the dinamic routes concept delivered by the Next.js Framework.

In addition, all the data used in this SPA comes from the 'PokeAPI' API, which may be found in the following URL: https://pokeapi.co/. The images from all the fetched itens and Pokémons comes from the following URL: https://github.com/PokeAPI/sprites/tree/master/sprites. 
