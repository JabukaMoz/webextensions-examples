/*
Troca a ocorrencia do texto USP/UFSCAR para UNESP e adiciona o negrito
*/
document.body.innerHTML = document.body.innerHTML.replace(/USP|UFSCAR/gi, '<b>UNESP</b>');
