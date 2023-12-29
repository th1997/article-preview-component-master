function toggleShare() {
    var shareBtn = document.getElementById('share_btn');
    var svgShare = document.getElementById('svg_share');
    var etat = document.getElementById('SNcontainer').style.visibility;

    // Ajoute ou supprime la classe 'active' pour changer les styles
    shareBtn.classList.toggle('active');
    
    // Change la couleur de fond en noir
    if (shareBtn.classList.contains('active')) {
      shareBtn.style.backgroundColor = 'var(--Very-Dark-Grayish-Blue)';

      // Change la couleur de l'image SVG en blanc
      svgShare.style.fill = 'white';
    } else {
      // Rétablit les styles par défaut si la classe 'active' est supprimée
      shareBtn.style.backgroundColor = 'var(--Light-Grayish-Blue)';
      svgShare.style.fill = 'var(--Desaturated-Dark-Blue)';
    }

    if(etat=="hidden"){
        document.getElementById('SNcontainer').style.visibility="visible";
    }
    else{
        document.getElementById('SNcontainer').style.visibility="hidden";
    }
}