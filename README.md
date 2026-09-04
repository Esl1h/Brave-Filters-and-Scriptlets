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
Pick one resolver and benchmark it against your ISP with [GRC's DNS Benchmark](https://www.grc.com/dns/benchmark.htm):
- [NextDNS](https://nextdns.io/?from=yes2mwwr): what I use, configurable DoH/DoT resolver with blocklists and per-device logging.
- [Quad9 (Secure w/ ECS)](https://quad9.net/pt/service/service-addresses-and-features/): a solid alternative if you'd rather not use NextDNS.

**Complementary lists**
- [EasyList Portuguese](https://easylist-downloads.adblockplus.org/easylistportuguese.txt) ([one-click subscribe](https://subscribe.adblockplus.org?location=https://easylist-downloads.adblockplus.org/easylistportuguese.txt&title=EasyList%20Portuguese&requiresLocation=https://easylist-downloads.adblockplus.org/easylist.txt&requiresTitle=EasyList)): general PT-language ad blocking, complements the site-specific rules here.
- [HaGeZi Multi PRO](https://github.com/hagezi/dns-blocklists#ledger-multi-pro-extended-protection-recommended-) DNS blocklist ([adblock format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/pro.txt) / [domains format](https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro-onlydomains.txt)): for NextDNS, Quad9, Pi-hole or AdGuard Home.

## License

- `filters.txt` / `filters` are released under [CC0 1.0](LICENSE) (public domain).
- The `*.js` scriptlets are released under the [MIT License](LICENSE-MIT).
