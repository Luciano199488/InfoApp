document.addEventListener('DOMContentLoaded', function() {
  const apartmentList = document.getElementById('apartment-list');
  const modal = document.getElementById('modal');
  const modalClose = document.querySelector('.close');
  const apartmentNumberElem = document.getElementById('apartment-number');
  const apartmentInfoElem = document.getElementById('apartment-info');

  // Gera números de apartamentos
  for (let floor = 7; floor <= 47; floor++) {
    for (let apt = 1; apt <= 2; apt++) {
      const aptNumber = `${floor}0${apt}`;
      const aptDiv = document.createElement('div');
      aptDiv.classList.add('apartment-item');
      aptDiv.innerText = aptNumber;

      // Adiciona evento de clique
      aptDiv.addEventListener('click', function() {
        openModal(aptNumber);
      });

      apartmentList.appendChild(aptDiv);
    }
  }

  // Função para abrir o modal com informações do apartamento
  function openModal(aptNumber) {
    apartmentNumberElem.innerText = `Apartamento ${aptNumber}`;
    
    // Você pode personalizar as informações de cada apartamento aqui
    apartmentInfoElem.innerText = `Informações personalizadas para o apartamento ${aptNumber}.`;

    modal.style.display = 'block';
  }

  // Fecha o modal quando o X é clicado
  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Fecha o modal ao clicar fora dele
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
