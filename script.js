$(document).ready(function(){
    console.log("jQuery carregado com sucesso!");
  });
  $(document).ready(function() {
    // Encontra o elemento com o ID carouselExampleControls e inicia o carrossel
    $("#carouselExampleControls").carousel();
    
    // Define o intervalo de tempo entre as transições de slides
    $("#carouselExampleControls").carousel({
      interval: 3000
    });
  });