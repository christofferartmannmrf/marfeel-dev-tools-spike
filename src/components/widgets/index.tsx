import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';

const Widget = styled.div`
  border-bottom: solid 1px #E2E8F0;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
`;
const Name = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 0;
`;
const Details = styled.div`
  margin-bottom: 1rem;
`;
const Pair = styled.div`
  margin-bottom: 1rem;

`;
const Key = styled.div`
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;
const Value = styled.div`

`;
const Parameters = styled.pre`
  background: #F7FAFC;
  font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New, monospace;
  font-size: 0.65rem;
  padding: 0.25rem;
`;

export default function Widgets(): ReactElement {
  useEffect(() => {
    // chrome.devtools.inspectedWindow.eval('console.log("HELLO WORLD")', () => {

    // });
  }, []);

  return (
    <div>
      <Widget>
        <Name>Youtube Playlist</Name>
        <Details>
          <Pair>
            <Key>Selector</Key>
            <Value>.video_playlist</Value>
          </Pair>
          <Pair>
            <Key>Middleware</Key>
            <Value>youtube-playlist</Value>
          </Pair>
          <Pair>
            <Key>Platforms</Key>
            <Value>Web, AMP</Value>
          </Pair>
        </Details>

      <Key>Parameters</Key>
      <Parameters>
{ `
  {
    "videoSrc": "https://www.youtube.com/embed/R7FUBEikzjs?feature=oembed",
    "videos": [
      {
        "id": "b7ttPKKHwgM",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/el-tsunami-de-la-pandemia-370x280.jpg",
        "title": "El tsunami de la pandemia"
      },
      {
        "id": "HO0rAht0oQ8",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/marcha-atras-en-mexico-por-la-covid-19-370x280.jpg",
        "title": "Marcha atrás en México por la Covid-19"
      },
      {
        "id": "7N-s6DrXaBw",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/7-de-julio-de-2020-800h-pronostico-del-tiempo-370x280.jpg",
        "title": "7 de julio de 2020 8:00h Pronóstico del Tiempo"
      },
      {
        "id": "R7FUBEikzjs",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/concluye-visita-de-amlo-a-trump-370x280.jpg",
        "title": "Concluye visita de AMLO a Trump"
      },
      {
        "id": "b7ttPKKHwgM",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/el-tsunami-de-la-pandemia-370x280.jpg",
        "title": "El tsunami de la pandemia"
      },
      {
        "id": "HO0rAht0oQ8",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/marcha-atras-en-mexico-por-la-covid-19-370x280.jpg",
        "title": "Marcha atrás en México por la Covid-19"
      },
      {
        "id": "7N-s6DrXaBw",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/7-de-julio-de-2020-800h-pronostico-del-tiempo-370x280.jpg",
        "title": "7 de julio de 2020 8:00h Pronóstico del Tiempo"
      },
      {
        "id": "R7FUBEikzjs",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/concluye-visita-de-amlo-a-trump-370x280.jpg",
        "title": "Concluye visita de AMLO a Trump"
      },
      {
        "id": "b7ttPKKHwgM",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/el-tsunami-de-la-pandemia-370x280.jpg",
        "title": "El tsunami de la pandemia"
      },
      {
        "id": "HO0rAht0oQ8",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/marcha-atras-en-mexico-por-la-covid-19-370x280.jpg",
        "title": "Marcha atrás en México por la Covid-19"
      },
      {
        "id": "7N-s6DrXaBw",
        "imgSrc": "https://noreste.net/wp-content/uploads/2020/07/7-de-julio-de-2020-800h-pronostico-del-tiempo-370x280.jpg",
        "title": "7 de julio de 2020 8:00h Pronóstico del Tiempo"
      }
    ]
  }
`}
      </Parameters>
      </Widget>
    </div>
  );
}
