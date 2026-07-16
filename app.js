const chat = document.getElementById('chat');
const form = document.getElementById('form');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');

const states = {};

states.main = {
  t: `Olá! 👋

Bem-vindo ao <b>Cartório 2º Ofício de Várzea Grande/MT</b>.

Sou o assistente virtual e vou ajudá-lo a encontrar o serviço desejado.

Escolha uma opção:`,
  o: [
    ['1️⃣ Registro Civil', 'civil'],
    ['2️⃣ Tabelionato de Notas', 'notas'],
    ['3️⃣ Registro de Pessoas Jurídicas', 'juridicas'],
    ['4️⃣ Registro de Títulos e Documentos', 'titulos'],
    ['5️⃣ Protesto de Títulos', 'protesto'],
    ['6️⃣ Custas e Emolumentos', 'custas'],
    ['7️⃣ Horário de Atendimento', 'horario'],
    ['8️⃣ Endereço e Localização', 'endereco'],
    ['9️⃣ Falar com um Atendente', 'atendente'],
  ]
};

states.civil = {
  t: `<b>REGISTRO CIVIL</b>

Escolha o serviço desejado:`,
  o: [
    ['👶 Registro de Nascimento', 'civil_nascimento'],
    ['💍 Casamento', 'civil_casamento'],
    ['⚰ Registro de Óbito', 'civil_obito'],
    ['📄 Segunda Via de Certidão', 'civil_segunda_via'],
    ['📑 Certidão em Inteiro Teor', 'civil_inteiro_teor'],
    ['✏ Averbações', 'civil_averbacoes'],
    ['👨 Reconhecimento de Paternidade', 'civil_paternidade'],
    ['📝 Alteração de Nome', 'civil_alteracao_nome'],
    ['🌍 Traslado de Registro', 'civil_traslado'],
    ['⬅ Voltar', '__back__'],
  ]
};

states.civil_nascimento = {
  t: `<b>REGISTRO DE NASCIMENTO</b>

Deseja saber:`,
  o: [
    ['📋 Documentos Necessários', 'civil_nascimento_docs'],
    ['⏳ Prazo', 'civil_nascimento_prazo'],
    ['💲 Custas', 'civil_nascimento_custas'],
    ['❓ Perguntas Frequentes', 'civil_nascimento_faq'],
    ['👨‍💼 Falar com Atendente', 'atendente'],
    ['⬅ Voltar', '__back__'],
  ]
};

states.civil_nascimento_docs = {
  t: `<b>📋 Documentos Necessários - Registro de Nascimento</b>

• Declaração de Nascido Vivo (DNV)
• Documento dos pais (RG e CPF)
• Certidão de Casamento (quando houver)
• Comprovante de endereço`,
  o: [['🔙 Voltar ao menu', 'civil_nascimento']]
};

states.civil_nascimento_prazo = {
  t: `<b>⏳ Prazo - Registro de Nascimento</b>

O prazo legal para registro é de até 15 dias para o nascimento ocorrido em hospital e até 60 dias para o ocorrido fora de hospital.

O registro pode ser feito a qualquer tempo, independentemente da idade.`,
  o: [['🔙 Voltar', 'civil_nascimento']]
};

states.civil_nascimento_custas = {
  t: `<b>💲 Custas - Registro de Nascimento</b>

O registro de nascimento é <b>gratuito</b> para todos, conforme Lei 6.015/73.

Para segunda via da certidão de nascimento, consulte a opção "Segunda Via de Certidão".`,
  o: [['🔙 Voltar', 'civil_nascimento']]
};

states.civil_nascimento_faq = {
  t: `<b>❓ Perguntas Frequentes - Registro de Nascimento</b>

<b>1. Quem pode registrar?</b>
Os pais, ou na falta deles, parentes maiores, responsável legal ou instituição.

<b>2. Pode registrar em qualquer cartório?</b>
Sim, o registro pode ser feito em qualquer cartório de registro civil do país.

<b>3. E se o pai não reconhecer?</b>
A mãe pode registrar e posteriormente solicitar investigação de paternidade.

<b>4. Preciso levar testemunhas?</b>
Não, não é necessário levar testemunhas para registro de nascimento.`,
  o: [['🔙 Voltar', 'civil_nascimento']]
};

states.civil_casamento = {
  t: `<b>💍 CASAMENTO</b>

Escolha:`,
  o: [
    ['Habilitação', 'civil_casamento_habilitacao'],
    ['Casamento Civil', 'civil_casamento_civil'],
    ['Conversão de União Estável', 'civil_casamento_conversao'],
    ['Segunda Via', 'civil_casamento_segunda_via'],
    ['Inteiro Teor', 'civil_casamento_inteiro_teor'],
    ['Averbações', 'civil_casamento_averbacoes'],
    ['⬅ Voltar', '__back__'],
  ]
};

states.civil_casamento_habilitacao = {
  t: `<b>💍 HABILITAÇÃO DE CASAMENTO</b>

Deseja saber:`,
  o: [
    ['📋 Documentos', 'civil_casamento_habilitacao_docs'],
    ['⏳ Prazo', 'civil_casamento_habilitacao_prazo'],
    ['💲 Custas', 'civil_casamento_habilitacao_custas'],
    ['📅 Agendar Atendimento', 'agendar'],
    ['🔙 Voltar', 'civil_casamento'],
  ]
};

states.civil_casamento_habilitacao_docs = {
  t: `<b>📋 Documentos - Habilitação de Casamento</b>

• RG e CPF dos noivos
• Certidão de Nascimento (atualizada - 90 dias)
• Comprovante de residência
• Testemunhas (2 para cada lado)
• Certidão de Casamento com averbação (se divorciado)
• Certidão de Óbito do cônjuge (se viúvo)`,
  o: [['🔙 Voltar', 'civil_casamento_habilitacao']]
};

states.civil_casamento_habilitacao_prazo = {
  t: `<b>⏳ Prazo - Habilitação de Casamento</b>

O processo de habilitação leva em média 15 a 30 dias úteis, contados da publicação dos editais.

O casamento deve ser realizado em até 90 dias após a habilitação.`,
  o: [['🔙 Voltar', 'civil_casamento_habilitacao']]
};

states.civil_casamento_habilitacao_custas = {
  t: `<b>💲 Custas - Habilitação de Casamento</b>

Os valores variam conforme a tabela de emolumentos do estado de Mato Grosso. Consulte a opção "Custas e Emolumentos" no menu principal para valores atualizados.`,
  o: [['🔙 Voltar', 'civil_casamento_habilitacao']]
};

states.civil_casamento_civil = {
  t: `<b>💍 CASAMENTO CIVIL</b>

O casamento civil é realizado no cartório, em sessão solene, com a presença dos noivos, testemunhas e do juiz de paz.

Documentos necessários:
• Habilitação de casamento já concluída
• RG e CPF dos noivos
• 2 testemunhas por lado`,
  o: [['📅 Agendar Atendimento', 'agendar'], ['🔙 Voltar', 'civil_casamento']]
};

states.civil_casamento_conversao = {
  t: `<b>🔄 CONVERSÃO DE UNIÃO ESTÁVEL</b>

Transforme sua união estável em casamento civil.

Documentos necessários:
• Escritura de União Estável ou sentença judicial
• RG e CPF dos conviventes
• Certidão de Casamento com averbação (se divorciado)`,
  o: [['📅 Agendar Atendimento', 'agendar'], ['🔙 Voltar', 'civil_casamento']]
};

states.civil_casamento_segunda_via = {
  t: `<b>📄 SEGUNDA VIA - CASAMENTO</b>

Escolha o tipo:`,
  o: [
    ['Nascimento', 'civil_segunda_via_nascimento'],
    ['Casamento', 'civil_segunda_via_casamento'],
    ['Óbito', 'civil_segunda_via_obito'],
    ['Inteiro Teor', 'civil_segunda_via_inteiro_teor'],
    ['Digital', 'civil_segunda_via_digital'],
    ['🔙 Voltar', 'civil_casamento'],
  ]
};

states.civil_casamento_inteiro_teor = {
  t: `<b>📑 CERTIDÃO EM INTEIRO TEOR - CASAMENTO</b>

A certidão em inteiro teor reproduz integralmente o conteúdo do registro, incluindo todas as averbações.

Prazo: 5 a 10 dias úteis.`,
  o: [['🔙 Voltar', 'civil_casamento']]
};

states.civil_casamento_averbacoes = {
  t: `<b>✏ AVERBAÇÕES - CASAMENTO</b>

Averbações comuns em casamento:
• Separação judicial
• Divórcio
• Alteração de nome
• Óbito de um dos cônjuges`,
  o: [['🔙 Voltar', 'civil_casamento']]
};

states.civil_obito = {
  t: `<b>⚰ REGISTRO DE ÓBITO</b>

Deseja saber:`,
  o: [
    ['📋 Documentos Necessários', 'civil_obito_docs'],
    ['⏳ Prazo', 'civil_obito_prazo'],
    ['💲 Custas', 'civil_obito_custas'],
    ['👨‍💼 Falar com Atendente', 'atendente'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.civil_obito_docs = {
  t: `<b>📋 Documentos - Registro de Óbito</b>

• Atestado de Óbito (DO)
• RG e CPF do falecido
• Certidão de Casamento do falecido
• RG e CPF do declarante
• Comprovante de residência`,
  o: [['🔙 Voltar', 'civil_obito']]
};

states.civil_obito_prazo = {
  t: `<b>⏳ Prazo - Registro de Óbito</b>

O registro deve ser feito em até 24 horas do óbito.

Em caso de morte natural em hospital, o próprio hospital fornece a Declaração de Óbito.`,
  o: [['🔙 Voltar', 'civil_obito']]
};

states.civil_obito_custas = {
  t: `<b>💲 Custas - Registro de Óbito</b>

O registro de óbito é <b>gratuito</b> para pessoas reconhecidamente pobres, conforme Lei 6.015/73.

Para os demais, consulte a tabela de emolumentos.`,
  o: [['🔙 Voltar', 'civil_obito']]
};

states.civil_segunda_via = {
  t: `<b>📄 SEGUNDA VIA DE CERTIDÃO</b>

Escolha o tipo:`,
  o: [
    ['Nascimento', 'civil_segunda_via_nascimento'],
    ['Casamento', 'civil_segunda_via_casamento'],
    ['Óbito', 'civil_segunda_via_obito'],
    ['Inteiro Teor', 'civil_segunda_via_inteiro_teor'],
    ['Digital', 'civil_segunda_via_digital'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.civil_segunda_via_nascimento = {
  t: `<b>📄 Segunda Via - Nascimento</b>

Para solicitar a segunda via da certidão de nascimento, informe:
• Nome completo
• Data de nascimento
• Nome dos pais
• Local do registro

Prazo: 3 a 5 dias úteis`,
  o: [['🔙 Voltar', 'civil_segunda_via']]
};

states.civil_segunda_via_casamento = {
  t: `<b>📄 Segunda Via - Casamento</b>

Para solicitar a segunda via da certidão de casamento, informe:
• Nome dos cônjuges
• Data do casamento
• Livro e folha (se disponível)

Prazo: 3 a 5 dias úteis`,
  o: [['🔙 Voltar', 'civil_segunda_via']]
};

states.civil_segunda_via_obito = {
  t: `<b>📄 Segunda Via - Óbito</b>

Para solicitar a segunda via da certidão de óbito, informe:
• Nome do falecido
• Data do óbito
• Nome dos pais do falecido

Prazo: 3 a 5 dias úteis`,
  o: [['🔙 Voltar', 'civil_segunda_via']]
};

states.civil_segunda_via_inteiro_teor = {
  t: `<b>📑 Certidão em Inteiro Teor</b>

Reprodução completa do registro, com todas as averbações.

Prazo: 5 a 10 dias úteis.`,
  o: [['🔙 Voltar', 'civil_segunda_via']]
};

states.civil_segunda_via_digital = {
  t: `<b>💻 Certidão Digital</b>

Certidão eletrônica com validade jurídica, pode ser solicitada online.

Prazo: 1 a 2 dias úteis.`,
  o: [['🔙 Voltar', 'civil_segunda_via']]
};

states.civil_inteiro_teor = {
  t: `<b>📑 CERTIDÃO EM INTEIRO TEOR</b>

A certidão em inteiro teor reproduz integralmente o conteúdo do assento de registro civil, incluindo todas as averbações nele existentes.

Prazo: 5 a 10 dias úteis.

Valor: Consulte a tabela de emolumentos.`,
  o: [['🔙 Voltar', '__back__']]
};

states.civil_averbacoes = {
  t: `<b>✏ AVERBAÇÕES</b>

Averbações em registro civil:
• Casamento
• Separação
• Divórcio
• Reconhecimento de filho
• Alteração de nome
• Óbito`,
  o: [['🔙 Voltar', '__back__']]
};

states.civil_paternidade = {
  t: `<b>👨 RECONHECIMENTO DE PATERNIDADE</b>

O reconhecimento de paternidade pode ser feito:
• Voluntariamente pelos pais
• Por via administrativa (DNA)
• Por decisão judicial

Documentos: RG, CPF, Certidão de Nascimento do filho`,
  o: [['🔙 Voltar', '__back__']]
};

states.civil_alteracao_nome = {
  t: `<b>📝 ALTERAÇÃO DE NOME</b>

Possibilidades de alteração:
• Inclusão/exclusão de sobrenome
• Alteração por casamento/divórcio
• Alteração por decisão judicial
• Alteração para maiores de 18 anos (Lei 14.382/2022)

Consulte um atendente para verificar seu caso.`,
  o: [['👨‍💼 Falar com Atendente', 'atendente'], ['🔙 Voltar', '__back__']]
};

states.civil_traslado = {
  t: `<b>🌍 TRASLADO DE REGISTRO</b>

Traslado é o registro em cartório brasileiro de registro civil emitido no exterior.

Documentos:
• Certidão estrangeira (traduzida por tradutor juramentado)
• Documentos pessoais
• Comprovante de residência`,
  o: [['🔙 Voltar', '__back__']]
};

states.notas = {
  t: `<b>TABELIONATO DE NOTAS</b>

Escolha:`,
  o: [
    ['🏠 Escrituras', 'notas_escrituras'],
    ['📄 Procurações', 'notas_procuracao'],
    ['✍ Reconhecimento de Firma', 'notas_reconhecimento'],
    ['📑 Autenticação', 'notas_autenticacao'],
    ['📜 Ata Notarial', 'notas_ata'],
    ['📖 Testamento', 'notas_testamento'],
    ['🌍 Apostilamento de Haia', 'notas_apostilamento'],
    ['📂 Certidões', 'notas_certidoes'],
    ['⬅ Voltar', '__back__'],
  ]
};

states.notas_escrituras = {
  t: `<b>🏠 ESCRITURAS</b>

Escolha:`,
  o: [
    ['Compra e Venda', 'notas_escrituras_compra_venda'],
    ['Doação', 'notas_escrituras_doacao'],
    ['Inventário', 'notas_escrituras_inventario'],
    ['Divórcio', 'notas_escrituras_divorcio'],
    ['União Estável', 'notas_escrituras_uniao'],
    ['Dissolução', 'notas_escrituras_dissolucao'],
    ['Usufruto', 'notas_escrituras_usufruto'],
    ['Hipoteca', 'notas_escrituras_hipoteca'],
    ['Alienação Fiduciária', 'notas_escrituras_alienacao'],
    ['Confissão de Dívida', 'notas_escrituras_confissao'],
    ['Integralização de Capital', 'notas_escrituras_integralizacao'],
    ['Permuta', 'notas_escrituras_permuta'],
    ['Cessão de Direitos', 'notas_escrituras_cessao'],
    ['Bem de Família', 'notas_escrituras_bem_familia'],
    ['Emancipação', 'notas_escrituras_emancipacao'],
    ['Outras Escrituras', 'notas_escrituras_outras'],
    ['🔙 Voltar', '__back__'],
  ]
};

function makeScriptureState(title, info) {
  return {
    t: `<b>🏠 ${title}</b>

${info}`,
    o: [
      ['📋 Documentos', null, `${title} - Documentos Necessários\n\nConsulte um atendente para lista completa de documentos.`],
      ['💲 Custas', null, `${title} - Custas\n\nConsulte a tabela de emolumentos ou solicite um orçamento.`],
      ['⏳ Prazo', null, `${title} - Prazo\n\nO prazo médio é de 5 a 10 dias úteis após a apresentação de toda a documentação.`],
      ['📤 Enviar Documentação', 'enviar_doc'],
      ['📅 Agendar Atendimento', 'agendar'],
      ['👨‍💼 Falar com Atendente', 'atendente'],
      ['🔙 Voltar', '__back__'],
    ]
  };
}

states.notas_escrituras_compra_venda = makeScriptureState('Compra e Venda', 'Escritura de compra e venda de imóvel urbano ou rural.\n\nDocumentos comuns: RG, CPF, certidão de casamento, matrícula do imóvel, certidões negativas.');
states.notas_escrituras_doacao = makeScriptureState('Doação', 'Escritura de doação de imóvel, com ou sem usufruto.');
states.notas_escrituras_inventario = makeScriptureState('Inventário', 'Inventário extrajudicial no cartório (quando todos são maiores e capazes e há acordo).');
states.notas_escrituras_divorcio = makeScriptureState('Divórcio', 'Divórcio consensual extrajudicial (quando não há filhos menores ou incapazes).');
states.notas_escrituras_uniao = makeScriptureState('União Estável', 'Escritura declaratória de união estável.');
states.notas_escrituras_dissolucao = makeScriptureState('Dissolução', 'Dissolução de união estável consensual.');
states.notas_escrituras_usufruto = makeScriptureState('Usufruto', 'Instituição ou renúncia de usufruto.');
states.notas_escrituras_hipoteca = makeScriptureState('Hipoteca', 'Escritura de hipoteca convencional.');
states.notas_escrituras_alienacao = makeScriptureState('Alienação Fiduciária', 'Alienação fiduciária de imóvel.');
states.notas_escrituras_confissao = makeScriptureState('Confissão de Dívida', 'Escritura de confissão de dívida com garantia.');
states.notas_escrituras_integralizacao = makeScriptureState('Integralização de Capital', 'Integralização de capital social com imóvel.');
states.notas_escrituras_permuta = makeScriptureState('Permuta', 'Escritura de permuta de imóveis.');
states.notas_escrituras_cessao = makeScriptureState('Cessão de Direitos', 'Cessão de direitos possessórios ou hereditários.');
states.notas_escrituras_bem_familia = makeScriptureState('Bem de Família', 'Instituição de bem de família voluntário.');
states.notas_escrituras_emancipacao = makeScriptureState('Emancipação', 'Emancipação voluntária por escritura pública.');
states.notas_escrituras_outras = makeScriptureState('Outras Escrituras', 'Outros tipos de escrituras públicas não listados.');

states.notas_procuracao = {
  t: `<b>📄 PROCURAÇÕES</b>

Escolha:`,
  o: [
    ['Pessoa Física', 'notas_procuracao_pf'],
    ['Pessoa Jurídica', 'notas_procuracao_pj'],
    ['Veículo', 'notas_procuracao_veiculo'],
    ['Imóvel', 'notas_procuracao_imovel'],
    ['Previdenciária', 'notas_procuracao_prev'],
    ['Bancária', 'notas_procuracao_bancaria'],
    ['Revogação', 'notas_procuracao_revogacao'],
    ['Substabelecimento', 'notas_procuracao_sub'],
    ['🔙 Voltar', '__back__'],
  ]
};

function makeProcState(title, info) {
  return { t: `<b>📄 ${title}</b>\n\n${info}`, o: [['🔙 Voltar', '__back__']] };
}

states.notas_procuracao_pf = makeProcState('Procuração - Pessoa Física', 'Instrumento público que autoriza outra pessoa a agir em seu nome.\n\nDocumentos: RG, CPF.');
states.notas_procuracao_pj = makeProcState('Procuração - Pessoa Jurídica', 'Procuração para representar empresa.\n\nDocumentos: Contrato social, RG, CPF do representante.');
states.notas_procuracao_veiculo = makeProcState('Procuração - Veículo', 'Para venda ou transferência de veículo.');
states.notas_procuracao_imovel = makeProcState('Procuração - Imóvel', 'Para compra, venda ou administração de imóvel.');
states.notas_procuracao_prev = makeProcState('Procuração - Previdenciária', 'Para representação junto ao INSS.');
states.notas_procuracao_bancaria = makeProcState('Procuração - Bancária', 'Para movimentação bancária.');
states.notas_procuracao_revogacao = makeProcState('Revogação de Procuração', 'Revogação de procuração anterior.');
states.notas_procuracao_sub = makeProcState('Substabelecimento', 'Substabelecimento de poderes a terceiro.');

states.notas_reconhecimento = {
  t: `<b>✍ RECONHECIMENTO DE FIRMA</b>

Escolha:`,
  o: [
    ['Por Semelhança', 'notas_reconhecimento_semelhanca'],
    ['Por Autenticidade', 'notas_reconhecimento_autenticidade'],
    ['Abrir Firma', 'notas_reconhecimento_abrir'],
    ['Atualizar Assinatura', 'notas_reconhecimento_atualizar'],
    ['Consultar Firma', 'notas_reconhecimento_consultar'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.notas_reconhecimento_semelhanca = {
  t: `<b>✍ Reconhecimento por Semelhança</b>

Comparação da assinatura do documento com a firma existente no cartório.

Documentos: RG, CPF, documento com assinatura.`,
  o: [['🔙 Voltar', 'notas_reconhecimento']]
};

states.notas_reconhecimento_autenticidade = {
  t: `<b>✍ Reconhecimento por Autenticidade</b>

O reconhecimento por autenticidade exige que o interessado assine na presença do tabelião ou preposto.

Documentos: RG, CPF, documento original.`,
  o: [['🔙 Voltar', 'notas_reconhecimento']]
};

states.notas_reconhecimento_abrir = {
  t: `<b>✍ Abrir Firma</b>

Para abrir firma (registro de assinatura) no cartório.

Documentos: RG, CPF, comprovante de residência.

O titular deve comparecer pessoalmente.`,
  o: [['🔙 Voltar', 'notas_reconhecimento']]
};

states.notas_reconhecimento_atualizar = {
  t: `<b>✍ Atualizar Assinatura</b>

Atualização do padrão de assinatura no cartório.

Documentos: RG, CPF.

O titular deve comparecer pessoalmente.`,
  o: [['🔙 Voltar', 'notas_reconhecimento']]
};

states.notas_reconhecimento_consultar = {
  t: `<b>✍ Consultar Firma</b>

Verificar se determinada firma consta no cartório e quais os signatários autorizados.`,
  o: [['🔙 Voltar', 'notas_reconhecimento']]
};

states.notas_autenticacao = {
  t: `<b>📑 AUTENTICAÇÃO</b>

Escolha:`,
  o: [
    ['Documento', 'notas_autenticacao_doc'],
    ['Cópia Autenticada', 'notas_autenticacao_copia'],
    ['Documento Digital', 'notas_autenticacao_digital'],
    ['Autenticação Eletrônica', 'notas_autenticacao_eletronica'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.notas_autenticacao_doc = { t: `<b>📑 Autenticação de Documento</b>\n\nConfere fé pública a documento particular.\n\nApresentar original e cópia.`, o: [['🔙 Voltar', 'notas_autenticacao']] };
states.notas_autenticacao_copia = { t: `<b>📑 Cópia Autenticada</b>\n\nConfere que a cópia é fiel ao original.\n\nApresentar original e cópia.`, o: [['🔙 Voltar', 'notas_autenticacao']] };
states.notas_autenticacao_digital = { t: `<b>📑 Autenticação de Documento Digital</b>\n\nAutenticação de documentos eletrônicos.`, o: [['🔙 Voltar', 'notas_autenticacao']] };
states.notas_autenticacao_eletronica = { t: `<b>📑 Autenticação Eletrônica</b>\n\nAutenticação eletrônica de documentos (AED).`, o: [['🔙 Voltar', 'notas_autenticacao']] };

states.notas_ata = {
  t: `<b>📜 ATA NOTARIAL</b>

Deseja saber:`,
  o: [
    ['📋 Quando Utilizar', 'notas_ata_uso'],
    ['📋 Documentos', 'notas_ata_docs'],
    ['⏳ Prazo', 'notas_ata_prazo'],
    ['💲 Custas', 'notas_ata_custas'],
    ['📅 Agendar', 'agendar'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.notas_ata_uso = { t: `<b>📜 Quando Utilizar Ata Notarial</b>\n\nA ata notarial é utilizada para constatar e documentar fatos jurídicos, como:\n\n• Conteúdo de sites e redes sociais\n• Mensagens de aplicativos\n• Existência de bens\n• Declarações de terceiros\n• Qualquer situação que precise de prova legal`, o: [['🔙 Voltar', 'notas_ata']] };
states.notas_ata_docs = { t: `<b>📋 Documentos - Ata Notarial</b>\n\n• RG e CPF do solicitante\n• Descrição detalhada do fato a ser documentado\n• Endereço ou link (se aplicável)`, o: [['🔙 Voltar', 'notas_ata']] };
states.notas_ata_prazo = { t: `<b>⏳ Prazo - Ata Notarial</b>\n\nA ata é lavrada no momento da solicitação. Prazo de entrega: 1 a 3 dias úteis.`, o: [['🔙 Voltar', 'notas_ata']] };
states.notas_ata_custas = { t: `<b>💲 Custas - Ata Notarial</b>\n\nConsulte a tabela de emolumentos. O valor varia conforme a complexidade e quantidade de páginas.`, o: [['🔙 Voltar', 'notas_ata']] };

states.notas_testamento = {
  t: `<b>📖 TESTAMENTO</b>

Escolha:`,
  o: [
    ['Público', 'notas_testamento_publico'],
    ['Revogação', 'notas_testamento_revogacao'],
    ['Certidão', 'notas_testamento_certidao'],
    ['Informações', 'notas_testamento_info'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.notas_testamento_publico = { t: `<b>📖 Testamento Público</b>\n\nTestamento lavrado em livro próprio, lido em voz alta pelo tabelião e assinado pelo testador e testemunhas.\n\nDocumentos: RG, CPF, certidão de casamento, relação de bens e herdeiros.\n\nPrazo: 5 a 10 dias úteis.`, o: [['🔙 Voltar', 'notas_testamento']] };
states.notas_testamento_revogacao = { t: `<b>📖 Revogação de Testamento</b>\n\nRevogação total ou parcial do testamento anterior.\n\nO testador deve comparecer pessoalmente.`, o: [['🔙 Voltar', 'notas_testamento']] };
states.notas_testamento_certidao = { t: `<b>📖 Certidão de Testamento</b>\n\nCertidão de existência ou inexistência de testamento.\n\nPode ser solicitada por herdeiros ou interessados.`, o: [['🔙 Voltar', 'notas_testamento']] };
states.notas_testamento_info = { t: `<b>📖 Informações sobre Testamento</b>\n\nO testamento público é a forma mais segura e comum. O testador declara sua vontade perante o tabelião.\n\nCapacidade: maiores de 18 anos.\n\nTestemunhas: 2 a 3 pessoas.`, o: [['🔙 Voltar', 'notas_testamento']] };

states.notas_apostilamento = {
  t: `<b>🌍 APOSTILAMENTO DE HAIA</b>

Escolha:`,
  o: [
    ['Documento Brasileiro', 'notas_apostila_br'],
    ['Diploma', 'notas_apostila_diploma'],
    ['Certidão', 'notas_apostila_certidao'],
    ['Tradução', 'notas_apostila_traducao'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.notas_apostila_br = { t: `<b>🌍 Apostilamento - Documento Brasileiro</b>\n\nApostilamento de documentos públicos brasileiros para uso no exterior (países signatários da Convenção de Haia).`, o: [['🔙 Voltar', 'notas_apostilamento']] };
states.notas_apostila_diploma = { t: `<b>🌍 Apostilamento - Diploma</b>\n\nApostilamento de diplomas e certificados escolares para uso no exterior.`, o: [['🔙 Voltar', 'notas_apostilamento']] };
states.notas_apostila_certidao = { t: `<b>🌍 Apostilamento - Certidão</b>\n\nApostilamento de certidões (nascimento, casamento, óbito) para uso no exterior.`, o: [['🔙 Voltar', 'notas_apostilamento']] };
states.notas_apostila_traducao = { t: `<b>🌍 Apostilamento - Tradução</b>\n\nApostilamento de tradução juramentada.`, o: [['🔙 Voltar', 'notas_apostilamento']] };

states.notas_certidoes = {
  t: `<b>📂 CERTIDÕES - TABELIONATO DE NOTAS</b>\n\nCertidões emitidas pelo tabelionato:\n\n• Certidão de escritura\n• Certidão de procuração\n• Certidão de testamento\n• Certidão de ata notarial\n\nPrazo: 3 a 5 dias úteis.`,
  o: [['🔙 Voltar', '__back__']]
};

states.juridicas = {
  t: `<b>REGISTRO DE PESSOAS JURÍDICAS</b>

Escolha:`,
  o: [
    ['Associação', 'jur_associacao'],
    ['Fundação', 'jur_fundacao'],
    ['Condomínio', 'jur_condominio'],
    ['Organização Religiosa', 'jur_religiosa'],
    ['Sociedade Simples', 'jur_sociedade'],
    ['Ata', 'jur_ata'],
    ['Estatuto', 'jur_estatuto'],
    ['Eleição', 'jur_eleicao'],
    ['Diretoria', 'jur_diretoria'],
    ['Alteração', 'jur_alteracao'],
    ['Certidões', 'jur_certidoes'],
    ['Busca', 'jur_busca'],
    ['🔙 Voltar', '__back__'],
  ]
};

function makeJurState(title, info) {
  return { t: `<b>${title}</b>\n\n${info}`, o: [['🔙 Voltar', '__back__']] };
}

states.jur_associacao = makeJurState('Associação', 'Registro de associação civil sem fins lucrativos.\n\nDocumentos: Estatuto, ata de fundação, CPF e RG dos fundadores.');
states.jur_fundacao = makeJurState('Fundação', 'Registro de fundação.\n\nDocumentos: Estatuto, escritura pública, autorização do MP.');
states.jur_condominio = makeJurState('Condomínio', 'Registro de condomínio.\n\nDocumentos: Convenção de condomínio, ata de assembleia.');
states.jur_religiosa = makeJurState('Organização Religiosa', 'Registro de organização religiosa.\n\nDocumentos: Estatuto, ata de fundação, qualificação dos líderes.');
states.jur_sociedade = makeJurState('Sociedade Simples', 'Registro de sociedade simples.\n\nDocumentos: Contrato social, qualificação dos sócios.');
states.jur_ata = makeJurState('Registro de Ata', 'Registro de ata de assembleia geral.\n\nDocumentos: Ata assinada, lista de presença.');
states.jur_estatuto = makeJurState('Registro de Estatuto', 'Registro de estatuto social.\n\nDocumentos: Estatuto aprovado em assembleia.');
states.jur_eleicao = makeJurState('Eleição', 'Registro de eleição de diretoria.\n\nDocumentos: Ata de eleição, qualificação dos eleitos.');
states.jur_diretoria = makeJurState('Diretoria', 'Registro de diretoria.\n\nDocumentos: Ata de posse, qualificação dos diretores.');
states.jur_alteracao = makeJurState('Alteração', 'Registro de alteração de estatuto ou contrato social.');
states.jur_certidoes = makeJurState('Certidões', 'Certidão de registro de pessoa jurídica.\n\nPrazo: 3 a 5 dias úteis.');
states.jur_busca = makeJurState('Busca', 'Busca de registro de pessoa jurídica.\n\nInforme o nome ou CNPJ da entidade.');

states.titulos = {
  t: `<b>REGISTRO DE TÍTULOS E DOCUMENTOS</b>

⚠️ <b>Atenção:</b> Em Várzea Grande, o serviço de <b>Registro de Imóveis</b> (compra, venda, matrícula, hipoteca de imóveis) é de responsabilidade do <b>1º Ofício de Várzea Grande</b>.

📍 <b>Endereço:</b> Travessa Aquidaban, 38 - Centro, Várzea Grande - MT
📞 <b>Telefone:</b> (65) 3682-6660 / 3682-6661
🕐 <b>Horário:</b> Segunda a Sexta, 09h às 17h

Abaixo, os serviços de <b>Títulos e Documentos</b> deste cartório:

Escolha:`,
  o: [
    ['Registro de Contratos', 'tit_contratos'],
    ['Notificação Extrajudicial', 'tit_notificacao'],
    ['Alienação Fiduciária', 'tit_alienacao'],
    ['Locação', 'tit_locacao'],
    ['Comodato', 'tit_comodato'],
    ['Compra e Venda', 'tit_compra_venda'],
    ['Penhor', 'tit_penhor'],
    ['Instrumento Particular', 'tit_instrumento'],
    ['Certidões', 'tit_certidoes'],
    ['Busca', 'tit_busca'],
    ['Cancelamento', 'tit_cancelamento'],
    ['🔙 Voltar', '__back__'],
  ]
};

function makeTitState(title, info) {
  return { t: `<b>${title}</b>\n\n${info}`, o: [['🔙 Voltar', '__back__']] };
}

states.tit_contratos = makeTitState('Registro de Contratos', 'Registro de contratos em geral para dar fé pública e data certa.');
states.tit_notificacao = makeTitState('Notificação Extrajudicial', 'Notificação extrajudicial para constituição em mora, cobrança, etc.');
states.tit_alienacao = makeTitState('Alienação Fiduciária', 'Registro de alienação fiduciária de bens móveis.');
states.tit_locacao = makeTitState('Locação', 'Registro de contrato de locação.');
states.tit_comodato = makeTitState('Comodato', 'Registro de contrato de comodato (empréstimo de bem).');
states.tit_compra_venda = makeTitState('Compra e Venda', 'Registro de contrato de compra e venda de bens móveis.');
states.tit_penhor = makeTitState('Penhor', 'Registro de penhor de bens móveis.');
states.tit_instrumento = makeTitState('Instrumento Particular', 'Registro de instrumento particular.');
states.tit_certidoes = makeTitState('Certidões', 'Certidão de registro de títulos e documentos.\n\nPrazo: 3 a 5 dias úteis.');
states.tit_busca = makeTitState('Busca', 'Busca de registro de títulos e documentos.\n\nInforme o número do registro ou partes envolvidas.');
states.tit_cancelamento = makeTitState('Cancelamento', 'Cancelamento de registro de título ou documento.');

states.protesto = {
  t: `<b>PROTESTO DE TÍTULOS</b>

Escolha:`,
  o: [
    ['Consulta de Protesto', 'prot_consulta'],
    ['Cancelamento', 'prot_cancelamento'],
    ['Carta de Anuência', 'prot_anuencia'],
    ['Pagamento', 'prot_pagamento'],
    ['Parcelamento', 'prot_parcelamento'],
    ['Certidão', 'prot_certidao'],
    ['Apresentação de Título', 'prot_apresentacao'],
    ['Sustação', 'prot_sustacao'],
    ['Retirada', 'prot_retirada'],
    ['Dúvidas', 'prot_duvidas'],
    ['🔙 Voltar', '__back__'],
  ]
};

function makeProtState(title, info) {
  return { t: `<b>${title}</b>\n\n${info}`, o: [['🔙 Voltar', '__back__']] };
}

states.prot_consulta = makeProtState('Consulta de Protesto', 'Consulte se seu nome ou CPF/CNPJ possui protesto.\n\nPode ser feita presencialmente ou online.');
states.prot_cancelamento = makeProtState('Cancelamento de Protesto', 'Cancelamento do protesto após pagamento.\n\nDocumentos: Termo de desistência, comprovante de pagamento, documento pessoal.');
states.prot_anuencia = makeProtState('Carta de Anuência', 'Carta de anuência para desistência ou cancelamento de protesto.');
states.prot_pagamento = makeProtState('Pagamento', 'Pagamento de título protestado.\n\nO pagamento pode ser feito diretamente no cartório.');
states.prot_parcelamento = makeProtState('Parcelamento', 'Parcelamento de dívida protestada.\n\nMediante acordo com o credor.');
states.prot_certidao = makeProtState('Certidão de Protesto', 'Certidão de protesto.\n\nPrazo: 1 a 2 dias úteis.');
states.prot_apresentacao = makeProtState('Apresentação de Título', 'Apresentação de título a protesto.\n\nDocumentos: Título original, documento do credor.');
states.prot_sustacao = makeProtState('Sustação de Protesto', 'Sustação do protesto por determinação judicial ou acordo.');
states.prot_retirada = makeProtState('Retirada', 'Retirada do título de protesto antes do prazo.');
states.prot_duvidas = makeProtState('Dúvidas', 'Tire suas dúvidas sobre protesto de títulos.\n\nConsulte um atendente para informações personalizadas.');

states.custas = {
  t: `<b>CUSTAS E EMOLUMENTOS</b>

Escolha:`,
  o: [
    ['📋 Tabela de Emolumentos', 'custas_tabela'],
    ['💳 Forma de Pagamento', 'custas_pagamento'],
    ['PIX', 'custas_pix'],
    ['💳 Cartão', 'custas_cartao'],
    ['💰 Dinheiro', 'custas_dinheiro'],
    ['📝 Solicitar Orçamento', 'custas_orcamento'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.custas_tabela = {
  t: `<b>📋 Tabela de Emolumentos</b>

A tabela de emolumentos é atualizada anualmente pelo Tribunal de Justiça de Mato Grosso.

Consulte o site do TJMT ou solicite no balcão do cartório.

<a href="https://www.tjmt.jus.br">www.tjmt.jus.br</a>`,
  o: [['🔙 Voltar', '__back__']]
};

states.custas_pagamento = {
  t: `<b>💳 Forma de Pagamento</b>

Aceitamos as seguintes formas de pagamento:
• PIX
• Cartão de Débito e Crédito
• Dinheiro`,
  o: [['🔙 Voltar', '__back__']]
};

states.custas_pix = { t: `<b>PIX</b>\n\nPagamento via PIX na hora do atendimento.\n\nChave PIX: Consulte o cartório.`, o: [['🔙 Voltar', '__back__']] };
states.custas_cartao = { t: `<b>💳 Cartão</b>\n\nAceitamos cartões de débito e crédito.\n\nConsulte as bandeiras aceitas no cartório.`, o: [['🔙 Voltar', '__back__']] };
states.custas_dinheiro = { t: `<b>💰 Dinheiro</b>\n\nPagamento em espécie aceito.\n\nConsulte o troco disponível no momento do pagamento.`, o: [['🔙 Voltar', '__back__']] };
states.custas_orcamento = { t: `<b>📝 Solicitar Orçamento</b>\n\nPara solicitar um orçamento personalizado, informe o serviço desejado e os detalhes do ato.\n\nEntre em contato conosco.`, o: [['👨‍💼 Falar com Atendente', 'atendente'], ['🔙 Voltar', '__back__']] };

states.horario = {
  t: `<b>🕐 HORÁRIO DE ATENDIMENTO</b>

<b>Segunda a Sexta-feira</b>
08:00 às 17:00

<b>Plantão:</b>
Aos sábados, domingos e feriados, mediante agendamento para casos urgentes (registro de óbito, etc.).`,
  o: [['🔙 Voltar', '__back__']]
};

states.endereco = {
  t: `<b>📍 ENDEREÇO E LOCALIZAÇÃO</b>

Deseja:`,
  o: [
    ['📍 Localização', 'end_localizacao'],
    ['🚗 Como Chegar', 'end_como_chegar'],
    ['☎ Telefones', 'end_telefones'],
    ['📧 E-mail', 'end_email'],
    ['🌐 Site', 'end_site'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.end_localizacao = {
  t: `<b>📍 Localização</b>

<b>Cartório 2º Ofício de Várzea Grande/MT</b>

Endereço: Rua Governador Ponce de Arruda, nº 500, Centro
Várzea Grande - MT
CEP: 78110-000`,
  o: [['🔙 Voltar', '__back__']]
};

states.end_como_chegar = {
  t: `<b>🚗 Como Chegar</b>

O cartório está localizado no centro de Várzea Grande, próximo à Praça dos Bancos.

<u>Referências:</u>
• Em frente à Caixa Econômica Federal
• Próximo à Prefeitura Municipal
• Fácil acesso por transporte público (linhas Centro)

Utilize aplicativos de GPS: "Rua Gov. Ponce de Arruda, 500 - Centro, Várzea Grande"`,
  o: [['🔙 Voltar', '__back__']]
};

states.end_telefones = {
  t: `<b>☎ Telefones</b>

<b>Cartório 2º Ofício de Várzea Grande/MT</b>

📞 (65) 3688-5000 - Tabelionato
📞 (65) 3688-5001 - Registro Civil
📞 (65) 3688-5002 - Protesto
📞 (65) 3688-5003 - Pessoas Jurídicas`,
  o: [['🔙 Voltar', '__back__']]
};

states.end_email = {
  t: `<b>📧 E-mail</b>

Registro Civil: civil@cartoriovg.com.br
Tabelionato: tabelionato@cartoriovg.com.br
Protesto: protesto@cartoriovg.com.br
Jurídicas: juridicas@cartoriovg.com.br`,
  o: [['🔙 Voltar', '__back__']]
};

states.end_site = {
  t: `<b>🌐 Site</b>

Acesse nosso site:
<a href="https://www.cartoriovg.com.br">www.cartoriovg.com.br</a>

Siga-nos nas redes sociais para novidades e avisos.`,
  o: [['🔙 Voltar', '__back__']]
};

states.atendente = {
  t: `<b>👨‍💼 FALAR COM UM ATENDENTE</b>

Antes de transferir seu atendimento, informe:

✔ <b>Nome</b>
✔ <b>CPF</b> (opcional)
✔ <b>Telefone</b>
✔ <b>Assunto</b>

Digite seus dados abaixo para iniciar o atendimento.`,
  o: [
    ['✏ Informar dados', 'atendente_form'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.atendente_form = {
  t: `<b>👨‍💼 Atendimento</b>

Por favor, digite seus dados na seguinte ordem:

1. Seu nome completo
2. CPF (opcional)
3. Telefone com DDD
4. Assunto do atendimento`,
  o: [
    ['✅ Já enviei', 'atendente_enviar'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.atendente_enviar = {
  t: `✅ <b>Atendimento Encaminhado!</b>

Seu atendimento foi encaminhado para nossa equipe.

Em breve um atendente continuará esta conversa.

Agradecemos pelo contato! 🙏`,
  o: [
    ['🏠 Voltar ao Menu Inicial', 'main'],
  ]
};

states.agendar = {
  t: `<b>📅 Agendar Atendimento</b>

Para agendar um atendimento presencial, informe:

• Nome completo
• Telefone
• Serviço desejado
• Data e horário preferencial

Entre em contato conosco para verificar a disponibilidade.`,
  o: [
    ['👨‍💼 Falar com Atendente', 'atendente'],
    ['🔙 Voltar', '__back__'],
  ]
};

states.enviar_doc = {
  t: `<b>📤 Enviar Documentação</b>

Para enviar sua documentação digital, utilize um dos canais:

📧 E-mail: tabelionato@cartoriovg.com.br
📱 WhatsApp: (65) 3688-5000

Informe seu nome e o serviço desejado no envio.`,
  o: [
    ['👨‍💼 Falar com Atendente', 'atendente'],
    ['🔙 Voltar', '__back__'],
  ]
};

const keywords = [
  { pattern: /casar|casamento|noiva|noivo|união/i, state: 'civil_casamento' },
  { pattern: /nascimento|nasceu|bebê|bebe|filho|recém/i, state: 'civil_nascimento' },
  { pattern: /certidão|2ª via|segunda via|perdi|extravi/i, state: 'civil_segunda_via' },
  { pattern: /óbito|obito|morreu|faleceu|falecimento|morte/i, state: 'civil_obito' },
  { pattern: /nome|alterar|mudar|trocar/i, state: 'civil_alteracao_nome' },
  { pattern: /paternidade|pai|reconhecer/i, state: 'civil_paternidade' },
  { pattern: /traslado|exterior|estrangeiro|internacional/i, state: 'civil_traslado' },
  { pattern: /escritura|compra|venda|imóvel|casa|terreno|apto/i, state: 'notas_escrituras_compra_venda' },
  { pattern: /doação|doar/i, state: 'notas_escrituras_doacao' },
  { pattern: /inventário|inventario|herança|heranca|espólio|espolio/i, state: 'notas_escrituras_inventario' },
  { pattern: /divórcio|divorcio|separação|separacao/i, state: 'notas_escrituras_divorcio' },
  { pattern: /união|uniao|estável|estavel/i, state: 'notas_escrituras_uniao' },
  { pattern: /procuração|procuracao|representar|poderes/i, state: 'notas_procuracao' },
  { pattern: /firma|reconhecer|autenticidade|semelhança|assinatura/i, state: 'notas_reconhecimento' },
  { pattern: /autenticar|cópia|copia|autenticação|autenticacao|fotocópia/i, state: 'notas_autenticacao' },
  { pattern: /ata notarial|prova|constatar|documentar/i, state: 'notas_ata' },
  { pattern: /testamento|morrer|vontade|herdeiro/i, state: 'notas_testamento' },
  { pattern: /apostila|haia|exterior|estrangeiro/i, state: 'notas_apostilamento' },
  { pattern: /associação|associacao|sem fins lucrativos/i, state: 'jur_associacao' },
  { pattern: /fundação|fundacao/i, state: 'jur_fundacao' },
  { pattern: /condomínio|condominio|síndico|sindico/i, state: 'jur_condominio' },
  { pattern: /religiosa|igreja|templo|ministro|pastor|padre/i, state: 'jur_religiosa' },
  { pattern: /contrato|registrar contrato/i, state: 'tit_contratos' },
  { pattern: /notificação|notificacao|extrajudicial/i, state: 'tit_notificacao' },
  { pattern: /protesto|consulta protesto|cancelar protesto|nome sujo/i, state: 'protesto' },
  { pattern: /custas|emolumentos|quanto custa|preço|valor|tabela/i, state: 'custas' },
  { pattern: /orçamento|orcamento|orçar|orcar/i, state: 'custas_orcamento' },
  { pattern: /horário|horario|hora|funcionamento|aberto|fechado/i, state: 'horario' },
  { pattern: /endereço|endereco|localização|localizacao|onde fica|como chegar|fica/i, state: 'endereco' },
  { pattern: /telefone|falar|contato|ligar|whatsapp/i, state: 'atendente' },
  { pattern: /atendente|humano|pessoa|transferir/i, state: 'atendente' },
  { pattern: /voltar|menu|início|inicio|principal/i, state: 'main' },
  { pattern: /averbação|averbacao|averbar/i, state: 'civil_averbacoes' },
  { pattern: /inteiro teor|completa|completo/i, state: 'civil_inteiro_teor' },
  { pattern: /emancipação|emancipacao|menor/i, state: 'notas_escrituras_emancipacao' },
  { pattern: /bem de fam[ií]lia|im[óo]vel residencial/i, state: 'notas_escrituras_bem_familia' },
  { pattern: /permuta|troca|trocar/i, state: 'notas_escrituras_permuta' },
  { pattern: /agendar|agenda|marcar|horário marcado|consulta/i, state: 'agendar' },
  { pattern: /digital|eletrônica|online/i, state: 'civil_segunda_via_digital' },
];

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 6 && h < 12) return 'Bom dia! 🌅';
  if (h >= 12 && h < 18) return 'Boa tarde! ☀️';
  return 'Boa noite! 🌙';
}

function formatTime(date) {
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

let currentState = 'main';
let stateHistory = [];
let atendenteData = { step: 0, nome: '', cpf: '', telefone: '', assunto: '' };

function addMessage(content, type) {
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.innerHTML = `<div class="bubble">${content}</div><span class="time">${formatTime(new Date())}</span>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showTyping() {
  const div = document.createElement('div');
  div.className = 'typing';
  div.id = 'typing';
  div.innerHTML = '<span></span><span></span><span></span>';
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typing');
  if (el) el.remove();
}

function renderState(stateId) {
  const state = states[stateId];
  if (!state) return;

  const greeting = getGreeting();
  const msg = stateId === 'main' ? state.t : `${greeting}<br><br>${state.t}`;
  addMessage(msg, 'received');

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options-container';
  optionsDiv.id = 'options';

  state.o.forEach((opt, i) => {
    const label = opt[0];
    const nextState = opt[1];
    const customReply = opt[2] || null;

    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = label;

    if (nextState === '__back__') {
      btn.addEventListener('click', () => {
        removeOptions();
        if (stateHistory.length > 0) {
          const prev = stateHistory.pop();
          currentState = prev;
          renderState(currentState);
        }
      });
    } else if (customReply) {
      btn.addEventListener('click', () => {
        removeOptions();
        addMessage(label, 'sent');
        stateHistory.push(currentState);
        currentState = nextState;
        renderState(currentState);
      });
    } else if (nextState) {
      btn.addEventListener('click', () => {
        removeOptions();
        addMessage(label, 'sent');
        stateHistory.push(currentState);
        currentState = nextState;
        renderState(currentState);
      });
    }

    optionsDiv.appendChild(btn);
  });

  chat.appendChild(optionsDiv);
  chat.scrollTop = chat.scrollHeight;
}

function removeOptions() {
  const el = document.getElementById('options');
  if (el) el.remove();
}

function findStateByKeyword(text) {
  for (const item of keywords) {
    if (item.pattern.test(text)) {
      return item.state;
    }
  }
  return null;
}

function findNearestNumber(text) {
  const clean = text.replace(/[ºª]/g, '').trim();
  const numMap = {
    '1': 'civil', 'um': 'civil',
    '2': 'notas', 'dois': 'notas',
    '3': 'juridicas', 'tres': 'juridicas',
    '4': 'titulos', 'quatro': 'titulos',
    '5': 'protesto', 'cinco': 'protesto',
    '6': 'custas', 'seis': 'custas',
    '7': 'horario', 'sete': 'horario',
    '8': 'endereco', 'oito': 'endereco',
    '9': 'atendente', 'nove': 'atendente',
  };
  return numMap[clean] || null;
}

async function handleUserMessage(text) {
  addMessage(text, 'sent');
  input.value = '';
  sendBtn.disabled = true;
  showTyping();

  const delay = 800 + Math.random() * 1200;
  await new Promise(r => setTimeout(r, delay));

  hideTyping();

  if (currentState === 'atendente_form') {
    atendenteData.step++;
    if (atendenteData.step <= 4) {
      addMessage(`📝 Recebi seus dados.`, 'received');
      addMessage(`✅ Atendimento encaminhado! Em breve um atendente continuará esta conversa. 🙏`, 'received');
      stateHistory.push(currentState);
      currentState = 'main';
      atendenteData.step = 0;
      renderState(currentState);
      sendBtn.disabled = false;
      return;
    }
  }

  const clean = text.replace(/[ºª.]/g, '').trim();
  const currentStateObj = states[currentState];

  if (currentStateObj && currentStateObj.o) {
    let matched = false;
    for (let i = 0; i < currentStateObj.o.length; i++) {
      const opt = currentStateObj.o[i];
      const optNum = (i + 1).toString();
      const optLabel = opt[0].replace(/[^a-zA-Z0-9áéíóúãõçâêîôûàèìòùäëïöü\s]/g, '').trim().toLowerCase();
      const userInput = clean.toLowerCase();
      if (clean === optNum || userInput === optNum || userInput === optLabel || userInput.includes(optLabel)) {
        const next = opt[1];
        removeOptions();
        if (next === '__back__' && stateHistory.length > 0) {
          currentState = stateHistory.pop();
          renderState(currentState);
        } else if (next && next !== '__back__') {
          stateHistory.push(currentState);
          currentState = next;
          renderState(currentState);
        }
        matched = true;
        break;
      }
    }
    if (matched) { sendBtn.disabled = false; return; }
  }

  const keywordState = findStateByKeyword(text);
  if (keywordState) {
    removeOptions();
    if (stateHistory.length === 0 || stateHistory[stateHistory.length - 1] !== keywordState) {
      stateHistory.push(currentState);
    }
    currentState = keywordState;
    renderState(currentState);
    sendBtn.disabled = false;
    return;
  }

  addMessage(`Desculpe, não entendi. 😕

Digite o <b>número</b> da opção desejada ou descreva o serviço que procura.`, 'received');
  sendBtn.disabled = false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  handleUserMessage(text);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

renderState('main');
