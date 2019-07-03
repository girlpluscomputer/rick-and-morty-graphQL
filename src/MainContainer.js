import React from "react";
import Test from "./components/Test";
import { Link, Router, Route } from "react-router-dom";
import Logo from "./img/rick-and-morty.png";
import { MainContent, Navbar, LogoContainer, Item } from "./elements";
// import Test from "./components/Test";

function MainContainer() {
  return (
    <MainContent>
      <LogoContainer>
        <img src={Logo} alt="logo" width="200" height="80" />
      </LogoContainer>
      <Navbar />
    </MainContent>
  );
}

export default MainContainer;

// <Fragment>
//         {loading ? (
//           <PageLoading />
//         ) : (
//           <Fragment>
//             <MainContainer>
//               <img src={Logo} alt="logo" width="250" />
//               <Title>Character generator</Title>
//               <HistorialButton onClick={this.handleHistorial}>
//                 <img
//                   alt="history button"
//                   src={historialButtonImg}
//                   width="28px"
//                 />
//               </HistorialButton>
//               <Character character={character} />
//               <Button onClick={this.generateCharacter}>Generate</Button>
//             </MainContainer>
//             <Historial
//               show={show}
//               characters={characters}
//               handleHistorial={this.handleHistorial}
//             />
//           </Fragment>
//         )}
//       </Fragment>
// Random Character
// Random Location
// Find Character
// Find Location

// React Router
// random-character
// random-location
// find-character
// find-location

// Arquitecture:
/*

  App
  {
    random-character{
      return-button
      character-card
      random-character-button
      historial-characters
    }
    random-location
    {
      return-button
      location-card
      random-location-button
      historial-locations
    }
    find-character{
      return-button
      form{
        input-text-name
        drop-down-menu-status
        drop-down-menu-gender
        submit-button
      }
      character-card
    }
    find-location{
      return-button
      form{
        input-text-name
        drop-down-menu-status
        drop-down-menu-gender
        submit-button
      }
      character-card
    }    
  }

*/
