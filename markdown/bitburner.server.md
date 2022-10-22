<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [Server](./bitburner.server.md)

## Server interface

A single server.

<b>Signature:</b>

```typescript
export interface Server 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [backdoorInstalled](./bitburner.server.backdoorinstalled.md) | boolean | Flag indicating whether this server has a backdoor installed by a player |
|  [baseDifficulty](./bitburner.server.basedifficulty.md) | number | Initial server security level (i.e. security level when the server was created) |
|  [cpuCores](./bitburner.server.cpucores.md) | number | How many CPU cores this server has. Maximum of 8. Affects magnitude of grow and weaken. |
|  [ftpPortOpen](./bitburner.server.ftpportopen.md) | boolean | Flag indicating whether the FTP port is open |
|  [hackDifficulty](./bitburner.server.hackdifficulty.md) | number | Server Security Level |
|  [hasAdminRights](./bitburner.server.hasadminrights.md) | boolean | Flag indicating whether player has admin/root access to this server |
|  [hostname](./bitburner.server.hostname.md) | string | Hostname. Must be unique |
|  [httpPortOpen](./bitburner.server.httpportopen.md) | boolean | Flag indicating whether HTTP Port is open |
|  [ip](./bitburner.server.ip.md) | string | IP Address. Must be unique |
|  [isConnectedTo](./bitburner.server.isconnectedto.md) | boolean | Flag indicating whether player is currently connected to this server |
|  [maxRam](./bitburner.server.maxram.md) | number | RAM (GB) available on this server |
|  [minDifficulty](./bitburner.server.mindifficulty.md) | number | Minimum server security level that this server can be weakened to |
|  [moneyAvailable](./bitburner.server.moneyavailable.md) | number | How much money currently resides on the server and can be hacked |
|  [moneyMax](./bitburner.server.moneymax.md) | number | Maximum amount of money that this server can hold |
|  [numOpenPortsRequired](./bitburner.server.numopenportsrequired.md) | number | Number of open ports required in order to gain admin/root access |
|  [openPortCount](./bitburner.server.openportcount.md) | number | How many ports are currently opened on the server |
|  [organizationName](./bitburner.server.organizationname.md) | string | Name of company/faction/etc. that this server belongs to. Optional, not applicable to all Servers |
|  [purchasedByPlayer](./bitburner.server.purchasedbyplayer.md) | boolean | Flag indicating whether this is a purchased server |
|  [ramUsed](./bitburner.server.ramused.md) | number | RAM (GB) used. i.e. unavailable RAM |
|  [requiredHackingSkill](./bitburner.server.requiredhackingskill.md) | number | Hacking level required to hack this server |
|  [serverGrowth](./bitburner.server.servergrowth.md) | number | Parameter that affects how effectively this server's money can be increased using the grow() Netscript function |
|  [smtpPortOpen](./bitburner.server.smtpportopen.md) | boolean | Flag indicating whether SMTP Port is open |
|  [sqlPortOpen](./bitburner.server.sqlportopen.md) | boolean | Flag indicating whether SQL Port is open |
|  [sshPortOpen](./bitburner.server.sshportopen.md) | boolean | Flag indicating whether the SSH Port is open |
