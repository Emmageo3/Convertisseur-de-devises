// Récupérer les deux champs
const cfadalInput = document.getElementById('input-cfadal')
const dalcfaInput = document.getElementById('input-dalcfa')

// Associer un événement qui correspond au changement
// de la valeur du champ
cfadalInput.addEventListener('input', () => {
  // Récupérer la valeur saisie par l'utilisateur
  const cfa = cfadalInput.value

  // Convertir la valeur en nombre
  const cfaNombre = parseFloat(cfa)

  // Récupérer le taux
  const taux = cfadalInput.getAttribute('data-taux')

  // Convertir le taux en nombre
  const tauxNombre = parseFloat(taux)

  // Calculer la nouvelle conversion
  const nouvelleConversion = cfaNombre * tauxNombre
  
  console.log(nouvelleConversion)

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5)

  console.log(nouvelleConversionTexte)

  // Mettre à jour le champ
  dalcfaInput.value = nouvelleConversionTexte
})

dalcfaInput.addEventListener('input', () => {
  // Récupérer la valeur saisie par l'utilisateur
  const dal = dalcfaInput.value

  // Convertir la valeur en nombre
  const dalNombre = parseFloat(dal)

  // Récupérer le taux
  const taux = dalcfaInput.getAttribute('data-taux')

  // Convertir le taux en nombre
  const tauxNombre = parseFloat(taux)

  // Calculer la nouvelle conversion
  const nouvelleConversion = dalNombre / tauxNombre

  console.log(nouvelleConversion)

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5)

  console.log(nouvelleConversionTexte)

  // Mettre à jour le champ
  cfadalInput.value = nouvelleConversionTexte
})
