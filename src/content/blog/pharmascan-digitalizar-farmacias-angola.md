---
title: "PharmaScan: Como Estamos a Digitalizar as Farmácias Angolanas"
description: "A história técnica e estratégica por trás do PharmaScan — a plataforma multi-tenant que está a transformar a gestão de farmácias em Angola."
pubDate: 2025-04-12
tags: ["PharmaScan Angola", "software farmácias Angola", "digitalização saúde Angola", "sistema gestão farmácia", "startup Angola tecnologia"]
author: "Bruno Correia"
---

Há um problema que quase toda a gente em Angola já viveu: chegar a uma farmácia, perguntar por um medicamento e ouvir "não temos" — para descobrir depois que a farmácia a 300 metros tinha o produto em stock. Ou chegar a uma farmácia que tem o produto mas não sabe o preço porque "a senhora que sabe foi almoçar".

Este problema parece pequeno. Multiplicado por centenas de farmácias, em dezenas de cidades, ao longo de meses, representa perdas de receita, desperdício de stock e, no pior dos casos, tratamentos interrompidos.

O PharmaScan nasceu para resolver isso.

---

## O Problema Real das Farmácias Angolanas

A maioria das farmácias em Angola — especialmente fora de Luanda — gere o seu negócio com uma combinação de Excel desactualizado, cadernetas em papel e memória dos funcionários.

Isso cria três categorias de problemas:

**Gestão de stock deficiente.** Produtos que vencem porque ninguém sabia que estavam parados. Encomendas repetidas por falta de visibilidade do inventário real. Stock de produtos de alta rotação a esgotar sem aviso.

**Atendimento lento e propenso a erros.** Pesquisar a disponibilidade de um medicamento manualmente demora minutos. Calcular o troco de uma venda com múltiplos artigos é feito de cabeça. Gerar uma factura requer preencher um papel à mão.

**Zero visibilidade de negócio.** O dono da farmácia não sabe, em tempo real, quanto vendeu hoje, qual o produto mais rentável, quais os clientes recorrentes ou qual o stock crítico. Cada decisão é baseada em impressões, não em dados.

---

## A Visão do PharmaScan

O PharmaScan não é apenas um software de gestão de farmácias. É uma plataforma multi-tenant — o que significa que serve múltiplas farmácias numa única infraestrutura, com dados completamente separados e seguros para cada cliente.

Esta arquitectura tem uma implicação estratégica importante: permite escalar para dezenas ou centenas de farmácias sem multiplicar os custos de infraestrutura. É o modelo que empresas como Shopify usam — uma plataforma, milhares de lojas independentes.

Para Angola, onde o mercado farmacêutico está em crescimento mas as farmácias individualmente têm recursos limitados, este modelo SaaS (Software as a Service) é a única forma de tornar a solução economicamente acessível.

---

## As Decisões Técnicas e Porquê as Tomámos

Cada escolha tecnológica no PharmaScan foi motivada pelas condições reais do mercado angolano — não por preferências abstractas.

### Backend: Django (Python)
Django é o framework mais maduro para construir sistemas de gestão complexos em Python. Tem suporte nativo para multi-tenancy, um ecossistema robusto de autenticação e permissões, e uma comunidade activa que mantém a segurança actualizada.

Python é também, de acordo com dados do mercado de trabalho angolano, a linguagem mais utilizada pelos programadores locais — o que facilita a formação de equipa e a manutenção futura do sistema.

### Mobile: Flutter
A farmacêutica angolana precisa de um dispositivo portátil para registar vendas no balcão, fazer inventário nos corredores e processar encomendas em movimento. Um computador fixo não serve. Uma app mobile que funcione offline é a solução correcta.

Flutter gera apps nativas para Android e iOS a partir de uma única base de código. Para uma startup com recursos limitados, isso significa metade do custo de desenvolvimento sem comprometer a qualidade da experiência do utilizador.

O requisito mais importante: **a app funciona offline**. Usando o padrão Atomic Delta Sync, as operações realizadas sem internet são guardadas localmente e sincronizadas com o servidor assim que a ligação é restabelecida. Uma farmácia não pode parar de vender porque a internet caiu.

### Web: Astro
O painel de administração e o site institucional do PharmaScan são construídos com Astro — um framework que gera HTML estático por padrão, com JavaScript adicionado apenas onde necessário.

O resultado: páginas que carregam em menos de 1 segundo mesmo em conexões 3G. Para um gestor de farmácia em Huambo ou Malanje que acede ao painel pelo telemóvel com dados limitados, isto faz toda a diferença.

---

## O Que o PharmaScan Faz (Funcionalidades Core)

**Gestão de Stock em Tempo Real**
Cada venda actualiza automaticamente o inventário. O sistema alerta quando um produto está abaixo do stock mínimo definido. Datas de validade são monitorizadas e o sistema avisa com antecedência configurável.

**Ponto de Venda (POS) Mobile**
O funcionário de balcão regista a venda pelo telemóvel ou tablet. O sistema calcula o total, aplica descontos configurados e gera a factura automaticamente — em conformidade com as regras da AGT.

**Painel de Analytics para o Gestor**
O dono da farmácia vê, em tempo real: receita do dia, semana e mês; produtos mais vendidos; comparação com períodos anteriores; alertas de stock crítico; e margem por produto.

**Gestão Multi-Loja**
Para grupos com mais de uma farmácia, o painel permite ver e gerir todas as lojas numa única interface, com transferência de stock entre unidades e relatórios consolidados.

**Modo Offline Completo**
Funciona sem internet. Sincroniza automaticamente. A farmácia nunca para.

---

## O Mercado e a Oportunidade

Angola tem mais de 1.500 farmácias registadas, com crescimento consistente à medida que a população urbana aumenta e o acesso a serviços de saúde melhora. A esmagadora maioria dessas farmácias não usa nenhum sistema de gestão digital.

A entrada no mercado começa em Huambo — onde conheço o terreno, os operadores e as dinâmicas locais. O modelo de expansão é progressivo: Huambo, depois Benguela e Lubango, depois Luanda, depois mercados vizinhos como Zâmbia e RDC, onde o Português tem presença crescente.

Este é o tipo de produto que Angola precisa e que o mercado internacional raramente constrói: software feito para as condições africanas reais, não adaptado a partir de soluções europeias ou americanas.

---

## Se Tens uma Farmácia em Angola

O PharmaScan está em fase de MVP. Se tens uma farmácia e queres ser um dos primeiros parceiros — com acesso antecipado, condições especiais e voz directa no desenvolvimento do produto — fala comigo.

A digitalização da tua farmácia pode começar esta semana.

→ [Quero Saber Mais Sobre o PharmaScan](/contacto)

---

*Bruno Correia. Fundador e engenheiro principal do PharmaScan. Engenheiro de Software em Huambo, Angola. Especializado em plataformas SaaS multi-tenant com Django, aplicações Flutter offline-first e arquitectura para mercados africanos.*
