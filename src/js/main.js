let ItemsMenu = document.querySelectorAll(".menu li");
let Sections = document.querySelectorAll(".content section");
let Planets = document.querySelectorAll(".planets li");
let PlanetSections = document.querySelectorAll(".planet");
let Explore = document.querySelector(".home .right .btn");
let Staffs = document.querySelectorAll(".staff");
let Dots = document.querySelectorAll(".dots li");
let Steps = document.querySelectorAll(".steps li");
let Techs = document.querySelectorAll(".tech");

let ShowDestination = function () {
  for (let i = 0; i < ItemsMenu.length; i++) {
    let ItemMenu = ItemsMenu[i];

    ItemMenu.addEventListener("click", () => {
      let Id = ItemMenu.getAttribute("rel");

      // gestion du active dans le menu
      for (let m = 0; m < ItemsMenu.length; m++) {
        let MenuEntry = ItemsMenu[m];

        MenuEntry.classList.remove("active");
      }
      ItemMenu.classList.add("active");

      for (let s = 0; s < Sections.length; s++) {
        const Section = Sections[s];

        // On ajoute la class hidden a toutes les sections
        Section.classList.add("hidden");

        // On supprime toutes les class du body
        document.body.setAttribute("class", "");

        // On ajoute la nouvelle class du body
        document.body.classList.add("page-" + Id);

        // On supprime la class hidden de la section pour l'afficher
        if (Section.classList.contains(Id)) {
          Section.classList.remove("hidden");
        }
      }
    });
  }

  Explore.addEventListener("click", () => {
    // gestion du active dans le menu
    for (let m = 0; m < ItemsMenu.length; m++) {
      let MenuEntry = ItemsMenu[m];

      MenuEntry.classList.remove("active");
    }
    document.querySelector(".menu li:nth-child(2)").classList.add("active");

    for (let s = 0; s < Sections.length; s++) {
      const Section = Sections[s];

      // On ajoute la class hidden a toutes les sections
      Section.classList.add("hidden");

      // On supprime toutes les class du body
      document.body.setAttribute("class", "");

      // On ajoute la nouvelle class du body
      document.body.classList.add("page-destinations");

      // On supprime la class hidden de la section pour l'afficher
      document.querySelector("section.destinations").classList.remove("hidden");
    }
  });
};

let ShowPlanet = function () {
  for (let i = 0; i < Planets.length; i++) {
    let Planet = Planets[i];

    Planet.addEventListener("click", () => {
      let Id = Planet.getAttribute("rel");

      // gestion du active dans le sous menu planets
      for (let m = 0; m < Planets.length; m++) {
        let PlanetMenuEntry = Planets[m];

        PlanetMenuEntry.classList.remove("active");
      }
      Planet.classList.add("active");

      for (let s = 0; s < PlanetSections.length; s++) {
        const Planet = PlanetSections[s];

        // On ajoute la class hidden a toutes les sections
        Planet.classList.add("hidden");

        // On supprime la class hidden de la section pour l'afficher
        if (Planet.classList.contains(Id)) {
          Planet.classList.remove("hidden");
        }
      }
    });
  }
};

let ShowCrew = function () {
  for (let i = 0; i < Dots.length; i++) {
    let Dot = Dots[i];

    Dot.addEventListener("click", () => {
      let Id = Dot.getAttribute("rel");

      // gestion du active dans le sous menu planets
      for (let m = 0; m < Dots.length; m++) {
        let DotMenu = Dots[m];

        DotMenu.classList.remove("active");
      }
      Dot.classList.add("active");

      for (let s = 0; s < Staffs.length; s++) {
        const Staff = Staffs[s];

        // On ajoute la class hidden a toutes les sections
        Staff.classList.add("hidden");

        // On supprime la class hidden de la section pour l'afficher
        if (Staff.classList.contains(Id)) {
          Staff.classList.remove("hidden");
        }
      }
    });
  }
};

let ShowTech = function () {
  for (let i = 0; i < Steps.length; i++) {
    let Step = Steps[i];

    Step.addEventListener("click", () => {
      let Id = Step.getAttribute("rel");

      // gestion du active dans le sous menu planets
      /*for (let m = 0; m < Steps.length; m++) {
        let StepMenu = Steps[m];

        StepMenu.classList.remove("active");
      }
      Step.classList.add("active");*/

      for (let s = 0; s < Techs.length; s++) {
        const Tech = Techs[s];

        // On ajoute la class hidden a toutes les sections
        Tech.classList.add("hidden");

        // On supprime la class hidden de la section pour l'afficher
        if (Tech.classList.contains(Id)) {
          Tech.classList.remove("hidden");
        }
      }
    });
  }
};

window.addEventListener("load", ShowDestination);
window.addEventListener("load", ShowPlanet);
window.addEventListener("load", ShowCrew);
window.addEventListener("load", ShowTech);
