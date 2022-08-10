const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");
const button1 = document.getElementById("bt1");
const button2 = document.getElementById("bt2");
const button3 = document.getElementById("bt3");
const button4 = document.getElementById("bt4");
const button5 = document.getElementById("bt5");
const button6 = document.getElementById("bt6");
const button7 = document.getElementById("bt7");
const button8 = document.getElementById("bt8");
const button9 = document.getElementById("bt9");
const button10 = document.getElementById("bt10");
const button11 = document.getElementById("bt11");
const button12 = document.getElementById("bt12");

// Buttons working
button1.addEventListener("click", function () {
  alert(
    "Apesar de seu nome, você tem um espírito flamejante, honra suas tradições e seus amigos, e quer honrar a memória de seus antepassados - o que também significa comprar brigas que não eram pra você lidar. De qualquer maneira, sinta-se honrado em ser um membro dos Lin Kuei!"
  );
});
button2.addEventListener("click", function () {
  alert(
    "Você honra a memória de sua família - e, por isso, acredita que precisa lutar sempre por ela, independente de qualquer coisa. Mas cuidado: você pode ser cegado pela sede de vingança e seguir um caminho não muito bom pela frente. Mas pelo menos pratique seus gritos de GET OVER HERE!"
  );
});
button3.addEventListener("click", function () {
  alert(
    "Você é uma pessoa nobre, destinada a realizar grandes feitos e ser um exemplo de indivíduo, o que não é um fardo nada leve de se carregar nos ombros. Mas nada tema: como o Escolhido, você é mais do que apto para derrotar os piores de seus inimigos, não importa o quê!"
  );
});
button4.addEventListener("click", function () {
  alert(
    "Você é determinado, calmo e possui senso de justiça. Assim como o Shaolin, você carrega muita responsabilidade e tem total discernimento disso, sua missão é honrar o nome de sua família! Além de sempre estar na moda com seu chapéu!"
  );
});
button5.addEventListener("click", function () {
  alert(
    "Você é uma pessoa nobre em vários sentidos, mas nem de longe você é delicada - mais do que isso: você é uma grande guerreira. Mas você precisa conhecer mais sobre seu passado e seus aliados, pois você pode estar suscetível a ser enganada por muita gente interesseira - até mesmo da sua família!"
  );
});
button6.addEventListener("click", function () {
  alert(
    "Você possui lindos dentes e uma saúde bocal de ótima qualidade hahaha. Assim como Mileena, você gosta muito de comer carne, e também sempre desaparece em momentos que não lhe convém."
  );
});
button7.addEventListener("click", function () {
  alert(
    "Mais debochado que você, só se houvessem dois como você! Muitos podem não te levar a sério e te menosprezar por sempre tratar as coisas com bom humor e ser mais egocêntrico, mas isso não te faz um guerreiro pior que os outros! Seja brincando ou na hora H, você mostra aos outros que seu destino é salvar o mundo."
  );
});
button8.addEventListener("click", function () {
  alert(
    "Você é uma pessoa bastante forte e corajosa, sendo um verdadeiro exemplo a ser seguido. Acima de qualquer coisa, você ama sua família e seus amigos, mas às vezes você precisa deixar o trabalho um pouco de lado pra não perder os seus momentos em família."
  );
});
button9.addEventListener("click", function () {
  alert(
    "Você é literalmente “bom de briga”, seu tamanho e sua musculatura intimidam qualquer um. Jax é muito determinado, mesmo depois de perder seus braços, não desistiu, e com aprimoração cibernética, voltou mais forte do que nunca!"
  );
});
button10.addEventListener("click", function () {
  alert(
    "Você possui o título de rainha, com uma enorme capacidade de utilizar sua voz para se proteger. Seu espírito de liderança é muitíssimo forte e não precisa de nada e de ninguém, pois você já é uma rainha muito poderosa, capaz de governar grandes populações."
  );
});
button11.addEventListener("click", function () {
  alert(
    "Mesmo com algumas escolhas questionáveis, você é uma pessoa que é vista como um mentor ou um líder, sempre visando a proteção de seus entes queridos. Você também precisa saber escolher bem quem são seus amigos e seus aliados, pois você os defenderá com sua vida, e vice-versa."
  );
});
button12.addEventListener("click", function () {
  alert(
    "Você é um exímio espadachim, e possui uma capacidade mental extraordinária. Assim como Kenshi, você confiou em pessoas erradas e acabou prejudicado. Todavia, deu a volta por cima e surpreendeu a todos!"
  );
});

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 1350) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2200) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2200) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }
  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
