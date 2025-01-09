document.getElementById('calcularNota').addEventListener('click', function () {
  const valorVenda = parseFloat(document.getElementById('valorVenda').value);
  const itens = document.getElementById('itens').value;
  const irpf = parseFloat(document.getElementById('irpf').value) / 100;
  const pis = parseFloat(document.getElementById('pis').value) / 100;
  const cofins = parseFloat(document.getElementById('cofins').value) / 100;
  const inss = parseFloat(document.getElementById('inss').value) / 100;
  const issqn = parseFloat(document.getElementById('issqn').value) / 100;

  if (isNaN(valorVenda) || !itens || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
  }

  const totalImpostos = valorVenda * (irpf + pis + cofins + inss + issqn);
  const valorLiquido = valorVenda - totalImpostos;

  const notaFiscal = `
      <h2>Nota Fiscal de Serviço</h2>
      <p><strong>Itens Vendidos:</strong> ${itens}</p>
      <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
      <p><strong>IRPF:</strong> R$ ${(valorVenda * irpf).toFixed(2)}</p>
      <p><strong>PIS:</strong> R$ ${(valorVenda * pis).toFixed(2)}</p>
      <p><strong>COFINS:</strong> R$ ${(valorVenda * cofins).toFixed(2)}</p>
      <p><strong>INSS:</strong> R$ ${(valorVenda * inss).toFixed(2)}</p>
      <p><strong>ISSQN:</strong> R$ ${(valorVenda * issqn).toFixed(2)}</p>
      <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
      <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
  `;

  document.getElementById('notaFiscal').innerHTML = notaFiscal;
});
