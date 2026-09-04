# Brave Filters and Scriptlets

Personal cosmetic filter list and redirect scriptlets for Brave's built-in ad blocker (also compatible with uBlock Origin, AdGuard and AdBlock Plus). 148 rules across 31 domains, plus 7 scriptlets that redirect popular sites to privacy-friendly alternative frontends.

> **Scope:** this is a small, personal list focused on the handful of sites I actually use day to day, it isn't meant to be a general-purpose ad blocker on its own. See [Recommended setup](#recommended-setup) below for what I run alongside it.

## Quick subscribe

Filter list raw URL:

```
https://raw.githubusercontent.com/Esl1h/Brave-Filters-and-Scriptlets/main/filters.txt
```

One-click subscribe (uBlock Origin / AdGuard / AdBlock Plus):

[Subscribe](https://subscribe.adblockplus.org/?location=https%3A%2F%2Fraw.githubusercontent.com%2FEsl1h%2FBrave-Filters-and-Scriptlets%2Fmain%2Ffilters.txt&title=Esli%27s%20Brave%20Filters)

**Brave:** go to `brave://settings/shields/filters`, under "Custom filter lists" click "Add filter list", paste the raw URL above.

## What it blocks

Annoyances, popups and cosmetic clutter on:

- Ultimate Guitar, Songsterr, TheOldReader
- Wikipedia and Wikiwand (also restyles typography/layout)
- Brazilian news and automotive sites: UOL, Folha, Motor1, InsideEVs, WebMotors, Quatro Rodas, Notícias Automotivas, Tecnoblog, Canaltech, InfoMoney, Bloomberg Línea, MoneyTimes, ReclameAqui, and a few smaller blogs

See [`filters.txt`](filters.txt) for the full rule set.

## Scriptlets

Redirect scriptlets that swap a site for a privacy-friendly alternative frontend:

| Site | Redirects to |
|---|---|
| Wikipedia | [Wikiwand](https://www.wikiwand.com) |
| Instagram | [imginn](https://imginn.com) |
| IMDb | [libremdb](https://github.com/zyachel/libremdb) |
| Quora | [quetre](https://github.com/zyachel/quetre) |
| YouTube | [Piped](https://github.com/TeamPiped/Piped) |
| Reddit | [Redlib](https://github.com/redlib-org/redlib) |
| TikTok | [ProxiTok](https://github.com/pablouser1/ProxiTok) |

The Wikipedia scriptlet is enabled automatically once you subscribe to `filters.txt`. The others need to be added manually as custom scriptlets in Brave (`brave://settings/shields/filters` → enable Developer Mode → paste the `.js` file content): see [`docs/README.adoc`](docs/README.adoc) for step-by-step instructions.

Public frontend instances change often; if a redirect stops working, check the linked project's instance list for a live alternative.

## Recommended setup

This list is one layer of a wider setup. What I combine it with:

**Brave Shields: extra filter lists**
In `brave://settings/shields/filters`, besides this list I also enable, from Brave's built-in list picker:
- "Spanish and Portuguese website ad blocker" (AdGuard)
- Brave's "Experimental filter list"

**DNS-level filtering**
Pick one resolver and benchmark it against your ISP with [DNSbench](https://github.com/Esl1h/DNSbench) or [dnsperf.com](https://www.dnsperf.com/#!dns-resolvers):
- [NextDNS](https://nextdns.io/?from=yes2mwwr): what I use, configurable DoH/DoT resolver with blocklists and per-device logging.
- [Quad9 (Secure w/ ECS)](https://quad9.net/pt/service/service-addresses-and-features/): a solid alternative if you'd rather not use NextDNS.

**Complementary lists**
- [EasyList Portuguese](https://easylist-downloads.adblockplus.org/easylistportuguese.txt) ([one-click subscribe](https://subscribe.adblockplus.org?location=https://easylist-downloads.adblockplus.org/easylistportuguese.txt&title=EasyList%20Portuguese&requiresLocation=https://easylist-downloads.adblockplus.org/easylist.txt&requiresTitle=EasyList)): general PT-language ad blocking, complements the site-specific rules here.
- [HaGeZi Multi PRO](https://github.com/hagezi/dns-blocklists#ledger-multi-pro-extended-protection-recommended-) DNS blocklist ([adblock format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.txt) / [domains format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro-onlydomains.txt)): for NextDNS, Quad9, Pi-hole or AdGuard Home.

## License

- `filters.txt` / `filters` are released under [CC0 1.0](LICENSE) (public domain).
- The `*.js` scriptlets are released under the [MIT License](LICENSE-MIT).

---

## Português

Lista pessoal de filtros cosméticos e scriptlets de redirecionamento para o bloqueador de anúncios nativo do Brave (também compatível com uBlock Origin, AdGuard e AdBlock Plus). 148 regras em 31 domínios, além de 7 scriptlets que redirecionam sites populares para frontends alternativos focados em privacidade.

> **Escopo:** esta é uma lista pequena e pessoal, focada nos poucos sites que eu realmente uso no dia a dia, não pretende ser um bloqueador de anúncios genérico. Veja [Configuração recomendada](#configuração-recomendada) abaixo para o que uso junto com ela.

### Assinatura rápida

URL raw da lista de filtros:

```
https://raw.githubusercontent.com/Esl1h/Brave-Filters-and-Scriptlets/main/filters.txt
```

Assinatura em um clique (uBlock Origin / AdGuard / AdBlock Plus):

[Assinar](https://subscribe.adblockplus.org/?location=https%3A%2F%2Fraw.githubusercontent.com%2FEsl1h%2FBrave-Filters-and-Scriptlets%2Fmain%2Ffilters.txt&title=Esli%27s%20Brave%20Filters)

**Brave:** acesse `brave://settings/shields/filters`, em "Custom filter lists" clique em "Add filter list" e cole a URL raw acima.

### O que ela bloqueia

Elementos incômodos, pop-ups e sujeira visual em:

- Ultimate Guitar, Songsterr, TheOldReader
- Wikipedia e Wikiwand (também reestiliza tipografia e layout)
- Sites brasileiros de notícias e automotivos: UOL, Folha, Motor1, InsideEVs, WebMotors, Quatro Rodas, Notícias Automotivas, Tecnoblog, Canaltech, InfoMoney, Bloomberg Línea, MoneyTimes, ReclameAqui, e alguns blogs menores

Veja [`filters.txt`](filters.txt) para o conjunto completo de regras.

### Scriptlets

Scriptlets de redirecionamento que trocam um site por um frontend alternativo focado em privacidade:

| Site | Redireciona para |
|---|---|
| Wikipedia | [Wikiwand](https://www.wikiwand.com) |
| Instagram | [imginn](https://imginn.com) |
| IMDb | [libremdb](https://github.com/zyachel/libremdb) |
| Quora | [quetre](https://github.com/zyachel/quetre) |
| YouTube | [Piped](https://github.com/TeamPiped/Piped) |
| Reddit | [Redlib](https://github.com/redlib-org/redlib) |
| TikTok | [ProxiTok](https://github.com/pablouser1/ProxiTok) |

O scriptlet da Wikipedia é habilitado automaticamente ao assinar o `filters.txt`. Os demais precisam ser adicionados manualmente como scriptlets personalizados no Brave (`brave://settings/shields/filters` → habilite o Modo Desenvolvedor → cole o conteúdo do arquivo `.js`): veja [`docs/README.adoc`](docs/README.adoc) para o passo a passo.

Instâncias públicas desses frontends mudam com frequência; se um redirecionamento parar de funcionar, verifique a lista de instâncias do projeto correspondente.

### Configuração recomendada

Esta lista é uma camada de uma configuração mais ampla. O que combino com ela:

**Brave Shields: listas de filtro extras**
Em `brave://settings/shields/filters`, além desta lista, também habilito, no seletor nativo de listas do Brave:
- "Spanish and Portuguese website ad blocker" (AdGuard)
- "Experimental filter list" do Brave

**Filtragem em nível de DNS**
Escolha um resolvedor e compare com o do seu provedor usando o [DNSbench](https://github.com/Esl1h/DNSbench) ou o [dnsperf.com](https://www.dnsperf.com/#!dns-resolvers):
- [NextDNS](https://nextdns.io/?from=yes2mwwr): o que eu uso, resolvedor DoH/DoT configurável, com blocklists e logs por dispositivo.
- [Quad9 (Secure w/ ECS)](https://quad9.net/pt/service/service-addresses-and-features/): uma alternativa sólida caso prefira não usar o NextDNS.

**Listas complementares**
- [EasyList Portuguese](https://easylist-downloads.adblockplus.org/easylistportuguese.txt) ([assinatura em um clique](https://subscribe.adblockplus.org?location=https://easylist-downloads.adblockplus.org/easylistportuguese.txt&title=EasyList%20Portuguese&requiresLocation=https://easylist-downloads.adblockplus.org/easylist.txt&requiresTitle=EasyList)): bloqueio de anúncios em português de forma geral, complementa as regras específicas por site desta lista.
- [HaGeZi Multi PRO](https://github.com/hagezi/dns-blocklists#ledger-multi-pro-extended-protection-recommended-), blocklist de DNS ([formato adblock](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.txt) / [formato domains](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro-onlydomains.txt)): para NextDNS, Quad9, Pi-hole ou AdGuard Home.

### Licença

- `filters.txt` / `filters` são distribuídos sob [CC0 1.0](LICENSE) (domínio público).
- Os scriptlets `*.js` são distribuídos sob a [Licença MIT](LICENSE-MIT).
