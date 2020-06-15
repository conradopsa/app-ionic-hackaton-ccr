insert into usuario values
(default, 'Conrado'),
(default, 'Suellen'),
(default, 'Bianca'),
(default, 'Rick'),
(default, 'Miguel');

insert into dicas_saude values
(default, 'O que fazer para dormir?', '<p>
A dificuldade em dormir pode ser minimizada com algumas dicas prática:
</p>
<p>
• Não permaneça muito tempo na cama acordado. Limitando seu tempo na cama, pode melhorar a qualidade do sono. Se estiver dormindo 7 horas, permaneça na cama por 7 horas e meia e não 9 ou 10 horas;
<br>
• Banho morno duas ou três horas antes de deitar;
<br>
• Não fique na cama se não estiver sonolento. Saia do quarto e encontre um lugar silencioso para relaxar e só retorne quando estiver com sono;
<br>
• Se estiver com os pés frios, use meias para dormir;
<br>
• Evite discussões estressantes no início da noite;
<br>
• Se o motivo da sua falta de sono são as preocupações, tente reservar 15 minutos pela manhã para concentrar-se nos problemas, o que pode diminuir a preocupação noturna;
<br>
• Faça terapias de relaxamento como respiração profunda e meditação;
<br>
• Identifique seu melhor ambiente e melhor posição para dormir, incluindo posição de travesseiros;
<br>
• Evite cochilos prolongados ao longo do dia. O indicado são apenas 30 minutos após o almoço;
<br>
• Consulte um médico.
</p>', date('2020-06-13'));

insert into consulta values
(default, 'Doutor Newton', ('2020-06-15 08:00:00'), 'O', 'Posto CCR, avenida xpto'),
(default, 'Doutor Newton', ('2020-06-15 09:30:00'), 'O', 'Posto CCR, avenida xpto'),
(default, 'Doutor Newton', ('2020-06-15 11:00:00'), 'O', 'Posto CCR, avenida xpto'),
(default, 'Doutor Newton', ('2020-06-15 14:00:00'), 'P', 'Posto CCR, avenida xpto'),
(default, 'Doutor Newton', ('2020-06-15 15:30:00'), 'P', 'Posto CCR, avenida xpto');

insert into pergunta values 
(1, 'Você está se sentindo bem?'),
(2, 'Você apresenta alguma dor?'),
(3, 'A sua dor é na cabeça?'),
(4, 'Essa dor acontece com frequencia?'),
(5, 'Está se sentindo febril?'),
(6, 'Você está tossindo ou sentindo dores na garganta?');

insert into possivel_diagnostico values
(1, 'Está tudo certo com você!'),
(2, 'Dado os seus sintomas e a atual situação, você pode estar com covid-19! Fique em casa caso seus sintomas não se agravarem. Se começar a sentir falta de ar, busque um profissional de saúde imediatamente.'),
(3, 'É melhor você procurar um profissional da saúde e tratar a sua dor o quanto antes.'),
(9999, 'O sistema ainda não possui uma resposta para o seu caso. Procure ajuda profissional!');

insert into resposta_usuario values
(default, 'Sim', date(now()), (select id from usuario where nome='Conrado'), null, 1);

-- Bonus: Select de perguntas e respostas de cada pessoa
select u.nome, p.textoPergunta, r.resposta
from resposta_usuario r join pergunta p on r.idPergunta = p.id join usuario u on r.idUsuario = u.id;