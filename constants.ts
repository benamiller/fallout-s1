import { Slide } from './types';

export const SLIDES: Slide[] = [
  // --- SECTION 1: SYSTEM INITIALIZATION ---
  {
    id: 1,
    section: "ARCHIVE_INIT",
    title: "THE END OF THE WORLD",
    subtitle: "Oct 23, 2077",
    content: "The Great War lasted only two hours. In that time, nuclear fire consumed the earth, destroying modern civilization. For over 200 years, humanity has clung to survival in the irradiated ruins or hidden deep underground in Vault-Tec's shelters.",
    imagePlaceholder: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200", // Mushroom cloud / Atmosphere
    themeColor: 'green',
    lorePoints: [
      { 
        id: 'great_war', 
        label: 'The Great War', 
        content: "SUBJECT: THE GREAT WAR\nDATE: 2077-10-23\nSTATUS: CATASTROPHIC EVENT\n\nCalculated probability of inevitability: 100%. The resource wars between the United States and China over the last drops of petroleum and uranium escalated to a critical breaking point. \n\nAt approximately 09:42 EST, nuclear confirmations were detected. Who struck first remains irrelevant to the outcome. The total atomic exchange resulted in the complete collapse of national governments, the vaporization of major population centers, and the creation of the 'Wasteland'. \n\nGlobal climate shifted immediately into nuclear winter, followed by centuries of radioactive fallout. Survival rate of surface population: < 12%."
      },
      { 
        id: 'vault_tec_intro', 
        label: 'Vault-Tec Corp', 
        content: "SUBJECT: VAULT-TEC CORPORATION\nCLASSIFICATION: TOP SECRET\n\nOfficially, Vault-Tec was a defense contractor dedicated to saving the American population via the 'Project Safehouse' initiative. Marketing materials promised a better life underground, free from the horrors of nuclear devastation.\n\nIn reality, the Vaults were never designed to save everyone. They were a series of social, biological, and psychological experiments conducted on a captive population, commissioned by the remnants of the federal government."
      }
    ]
  },

  // --- SECTION 2: PERSONNEL FILES (VAULT 33) ---
  {
    id: 2,
    section: "PERSONNEL_FILE",
    title: "LUCY MACLEAN",
    subtitle: "The Optimist",
    content: "Raised in the meritocratic bubble of Vault 33, Lucy is proficient in martial arts, marksmanship, and conflict resolution. Her 'Golden Rule' morality is brutally tested by the surface, yet she refuses to let the Wasteland break her spirit.",
    imagePlaceholder: "https://images.unsplash.com/photo-1590625326588-372070c7b2e9?q=80&w=1200", // Bunker/Corridor
    themeColor: 'green', 
    lorePoints: [
      { 
        id: 'goosey', 
        label: 'Skills & S.P.E.C.I.A.L.', 
        content: "SUBJECT: MACLEAN, LUCY\nEVALUATION:\n\nS (Strength): 5\nP (Perception): 6\nE (Endurance): 7\nC (Charisma): 8\nI (Intelligence): 7\nA (Agility): 6\nL (Luck): 4\n\nNotable Traits: 'Black Widow' perk (negotiation tactics), High Repair skill. Despite her naive demeanor, she demonstrates lethal combat efficiency when pushed."
      },
      { 
        id: 'surface_shock', 
        label: 'Surface Adaptation', 
        content: "SUBJECT: PSYCHOLOGICAL PROFILE\n\nMost Vault Dwellers die within 48 hours of surface exposure due to panic or trust. Lucy survives by adapting rapidly while retaining her core objective. She learns that 'the law' does not exist, yet she attempts to enforce a personal code of ethics in a world devoid of them."
      }
    ]
  },
  {
    id: 3,
    section: "PERSONNEL_FILE",
    title: "NORM MACLEAN",
    subtitle: "The Skeptic",
    content: "While his sister Lucy explores the surface, Norm stays behind. Lacking physical stature but possessing a sharp, inquisitive mind, he unravels the conspiracy rotting at the heart of Vault 33. He is the true detective of the story.",
    imagePlaceholder: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200", // Retro Computer Terminal
    themeColor: 'green',
    lorePoints: [
      {
        id: 'norm_hacking',
        label: 'Terminal Hacking',
        content: "SUBJECT: INTELLECTUAL CAPABILITIES\n\nNorm displays high Intelligence and Perception. While others in Vault 33 are content with 'The Great Adaptation', Norm notices inconsistencies. His ability to hack the Overseer's terminal (likely bypassing Level 4 security encryption) suggests he is one of the most capable minds in the Vault."
      },
      {
        id: 'chet',
        label: 'Chet',
        content: "SUBJECT: ASSOCIATE 'CHET'\n\nNorm's cousin and gatekeeper to the Vault armory. Norm manipulates Chet's cowardice and desire for conformity to gain access to restricted areas (Vault 32). Chet represents the 'ideal' Vault Dweller—compliant and fearful—acting as a foil to Norm's curiosity."
      }
    ]
  },
  {
    id: 4,
    section: "PERSONNEL_FILE",
    title: "HANK MACLEAN",
    subtitle: "The Overseer",
    content: "Benevolent father figure or corporate monster? Hank maintained the idyllic life of Vault 33 for decades. The reveal that he is a pre-war executive from 2077 who destroyed Shady Sands redefines him as one of the most dangerous men in the wasteland.",
    imagePlaceholder: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200", // Man in suit / Shadowy
    themeColor: 'green',
    lorePoints: [
      {
        id: 'buds_buds_agent',
        label: 'Agent of Vault 31',
        content: "SUBJECT: MANAGEMENT TIER\n\nHank is not just an Overseer; he is a 'Junior Executive' from Vault 31 (Bud's Buds). His primary directive is not the safety of Vault 33, but the preservation of the management class until 'Reclamation Day'—a day when all surface competitors have been eliminated."
      },
      {
        id: 'shady_sands_nuke',
        label: 'The Destroyer',
        content: "SUBJECT: WAR CRIME RECORD\n\nUpon discovering his wife had fled to Shady Sands with his children, Hank did not just retrieve the children; he authorized the nuclear destruction of the city. This act alone killed over 30,000 people and set civilization back by decades. Motivation: 'Competition is bad for business.'"
      }
    ]
  },

  // --- SECTION 3: PERSONNEL FILES (WASTELAND) ---
  {
    id: 5,
    section: "PERSONNEL_FILE",
    title: "THE GHOUL",
    subtitle: "The Bounty Hunter",
    content: "Cooper Howard died over 200 years ago. 'The Ghoul' is what remains. A drug-dependent gunslinger traversing the wasteland, guided by a singular, centuries-old quest to find his family and punish those who destroyed the world.",
    imagePlaceholder: "https://images.unsplash.com/photo-1533104825002-3c32e70f6d89?q=80&w=1200", // Cowboy / Western
    themeColor: 'amber',
    lorePoints: [
      { 
        id: 'ghoul_physiology', 
        label: 'Ghoulification', 
        content: "SUBJECT: NECROTIC POST-HUMAN\n\nSustained by mysterious yellow vials. Without them, he risks turning 'feral'—a state of mindless zombie-like aggression. His skin is leathered against radiation, and his body can heal from trauma that would kill a smoothskin, provided he sets the bones."
      },
      { 
        id: 'gunslinger', 
        label: 'V.A.T.S. Proficiency', 
        content: "SUBJECT: MARKSMANSHIP\n\nThe Ghoul aims not with his eyes, but with experience. His combat style mimics the V.A.T.S. (Vault-Tec Assisted Targeting System) mechanic found in RobCo devices, allowing him to target weak points (fusion cores, limb joints) with impossible precision."
      }
    ]
  },
  {
    id: 6,
    section: "PERSONNEL_FILE",
    title: "MAXIMUS",
    subtitle: "Brotherhood Knight",
    content: "Born in the darkness of Shady Sands' crater, Maximus was raised by the Brotherhood of Steel. He desires power to hurt those who hurt him, but finds his loyalty tested when he wears the armor of a Knight he let die.",
    imagePlaceholder: "https://images.unsplash.com/photo-1537233777727-b088e6b36056?q=80&w=1200", // Military gear / Armor
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'knight_titus',
        label: 'Identity Theft',
        content: "SUBJECT: KNIGHT TITUS INCIDENT\n\nMaximus violated the chain of command by failing to assist Knight Titus during a Yao Guai engagement. By taking the armor, he committed a capital offense. His journey is one of impostor syndrome—physically powerful in the suit, but emotionally vulnerable outside of it."
      },
      {
        id: 'magical_toaster',
        label: 'Technological Awe',
        content: "SUBJECT: INDOCTRINATION\n\nMaximus initially views pre-war tech with religious reverence (referring to a toaster). However, his exposure to Lucy and the reality of the surface begins to deprogram the Brotherhood's cult-like teachings."
      }
    ]
  },
  {
    id: 7,
    section: "PERSONNEL_FILE",
    title: "DANE",
    subtitle: "Brotherhood Scribe",
    content: "Maximus's closest friend and rival. Dane possesses the intellect and loyalty Maximus lacks but chooses self-sabotage (placing a razor in their own boot) to avoid the terrifying fate of being deployed to the Wasteland.",
    imagePlaceholder: "https://images.unsplash.com/photo-1507842217121-ad58641ebced?q=80&w=1200", // Library / Books
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'fear_of_surface',
        label: ' The Wasteland Fear',
        content: "SUBJECT: PSYCHOLOGICAL EVAL\n\nDane represents the rational fear of the surface. While Maximus dreams of glory, Dane understands that the 'mission' is a death sentence. Their confession to the self-inflicted injury saves Maximus from execution, proving that loyalty exists even within the Brotherhood's brutal hierarchy."
      },
      {
        id: 'scribe_duties',
        label: 'The Clergy',
        content: "SUBJECT: SCRIBE ORDER\n\nUnlike Knights who fight, Scribes maintain the technology and compile the history. Dane's promotion to the scribes places them in the religious/administrative heart of the order, contrasting with the combat-focused path of a Knight."
      }
    ]
  },
  {
    id: 8,
    section: "PERSONNEL_FILE",
    title: "LEE MOLDAVER",
    subtitle: "The Flame Mother",
    content: "A scientist from the pre-war era who survived to become the warlord leader of the NCR remnants. Vilified by Vault-Tec as a 'terrorist', she is worshipped by others as a savior who seeks to restore the world with Cold Fusion.",
    imagePlaceholder: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200", // Science Lab / Experiment
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'cold_fusion_creator',
        label: 'Cold Fusion Creator',
        content: "SUBJECT: SCIENTIFIC ACHIEVEMENT\n\nMoldaver (formerly Ms. Williams) researched Cold Fusion before the war. Her company was acquired and buried by Vault-Tec to protect their energy monopoly. She has spent over 200 years trying to unlock her life's work to provide free energy to the world."
      },
      {
        id: 'ncr_leadership',
        label: 'NCR Commander',
        content: "SUBJECT: POLITICAL STATUS\n\nFollowing the destruction of Shady Sands, Moldaver rallied the survivors. She operates from the Griffith Observatory. To the Vault Dwellers, she is a raider; to the Wastelanders, she is the legitimate continuity of the New California Republic government."
      }
    ]
  },

  // --- SECTION 4: PERSONNEL FILES (PRE-WAR) ---
  {
    id: 9,
    section: "ARCHIVE_RESTORED",
    title: "COOPER HOWARD",
    subtitle: "The Face of Fallout",
    content: "Before the bombs, Cooper was the American Dream personified. A Marine veteran turned Hollywood western star. He unwittingly became the propaganda face of Vault-Tec, his 'thumbs up' gesture becoming the symbol of the very corporation that would doom humanity.",
    imagePlaceholder: "https://images.unsplash.com/photo-1542301019-20c2b2923769?q=80&w=1200", // Classic cowboy clean
    themeColor: 'green',
    lorePoints: [
      {
        id: 'anchorage',
        label: 'Battle of Anchorage',
        content: "SUBJECT: SERVICE RECORD\n\nCooper served in the Sino-American War, fighting Chinese stealth troops in Alaska. He wore the T-45 Power Armor in combat. This experience left him disillusioned with the government ('The Red Scare') and wary of the military-industrial complex."
      },
      {
        id: 'vault_boy_origin',
        label: 'The Thumbs Up',
        content: "SUBJECT: VAULT BOY LOGO\n\nThe iconic 'Thumbs Up' was not a sign of approval. It was a military metric: if a mushroom cloud is smaller than your thumb at arm's length, you're safe from radiation burns. If it's bigger... run. Vault-Tec co-opted this grim survival tip into a cheery marketing logo."
      }
    ]
  },
  {
    id: 10,
    section: "ARCHIVE_RESTORED",
    title: "BARB HOWARD",
    subtitle: "Vault-Tec Executive",
    content: "Cooper's wife and a high-ranking executive at Vault-Tec. Driven by a desperate need to ensure her family's survival, she brokers the ultimate deal: starting a nuclear war to ensure Vault-Tec's monopoly on the future.",
    imagePlaceholder: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200", // Corporate woman
    themeColor: 'green',
    lorePoints: [
      {
        id: 'fiduciary_duty',
        label: 'The Triple Bottom Line',
        content: "SUBJECT: CORPORATE STRATEGY\n\nBarb argues that peace is bad for shareholder value. The only way to win the game of capitalism is to eliminate all competitors. By dropping the bombs themselves, Vault-Tec ensures they are the only governing body left standing."
      },
      {
        id: 'management_vault',
        label: 'The Good Vault',
        content: "SUBJECT: FAMILY PRESERVATION\n\nBarb's ruthlessness is rooted in maternal instinct. She secures a spot in 'one of the good vaults' (implied to be 31 or similar) for her family, unaware that her husband Cooper acts as a moral whistleblower against her work."
      }
    ]
  },
  {
    id: 11,
    section: "ARCHIVE_RESTORED",
    title: "JANEY HOWARD",
    subtitle: "The Daughter",
    content: "Innocent and observant, Janey is the emotional anchor for Cooper. She was with him on the horse when the bombs fell. Her fate remains the primary driving force behind The Ghoul's 200-year survival.",
    imagePlaceholder: "https://images.unsplash.com/photo-1601726079946-b6b90709b19e?q=80&w=1200", // Child / Retro vibes
    themeColor: 'green',
    lorePoints: [
      {
        id: 'cryo_status',
        label: 'Cryogenic Status',
        content: "SUBJECT: CURRENT STATUS UNKNOWN\n\nThe Ghoul asks Hank, 'Where is my family?' implying Janey is alive in cryostasis, likely in Vault 31 or another management facility. She is the leverage Vault-Tec holds over Cooper."
      },
      {
        id: 'the_bomb_drop',
        label: 'Oct 23 Event',
        content: "SUBJECT: PSYCHOLOGICAL TRAUMA\n\nJaney witnessed the destruction of Los Angeles firsthand. The thumb trick her father taught her moments before the blast serves as a tragic foreshadowing of the world she would inherit."
      }
    ]
  },

  // --- SECTION 5: CORPORATE OLIGARCHY ---
  {
    id: 12,
    section: "CORPORATE_DB",
    title: "VAULT-TEC",
    subtitle: "Preparing for the Future",
    content: "The architects of the end. Vault-Tec marketed salvation but delivered experimentation. By consolidating the power of the corporate elite, they ensured that the apocalypse was not an accident, but a product launch.",
    imagePlaceholder: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1200", // Retro futuristic control
    themeColor: 'green',
    lorePoints: [
      {
        id: 'project_safehouse',
        label: 'Project Safehouse',
        content: "SUBJECT: THE EXPERIMENTS\n\nOf the 122 public vaults commissioned, only 17 were 'control' vaults (designed to actually save people). The rest were social experiments designed to generate data for the Enclave's off-world colonization plans. Examples include Vault 4 (scientific governance) and Vault 33 (meritocratic breeding)."
      },
      {
        id: 'the_cabal',
        label: 'The Cabal',
        content: "SUBJECT: CORPORATE COLLUSION\n\nVault-Tec invited its competitors (RobCo, West-Tek, Big MT, RepConn) to purchase wings of vaults, allowing them to run their own experiments. This 'buy-in' ensured that no powerful entity would oppose the nuclear exchange, as they all had a stake in the post-war world."
      }
    ]
  },
  {
    id: 13,
    section: "CORPORATE_DB",
    title: "ROBCO INDUSTRIES",
    subtitle: "Tomorrow, Today!",
    content: "Founded by the visionary Robert House, RobCo Industries dominated the pre-war computer and robotics market. From the Pip-Boy on your wrist to the Protectron on the street, RobCo built the infrastructure of the American dream.",
    imagePlaceholder: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200", // Robot
    themeColor: 'green',
    lorePoints: [
      {
        id: 'mr_house',
        label: 'Robert House',
        content: "SUBJECT: CEO PROFILE\n\nA genius autocratic businessman who predicted the Great War mathematically. He attended the Vault-Tec meeting but played his own game, ensuring Las Vegas would survive the blasts. His philosophy: autocracy is the only way to rebuild humanity efficiently."
      },
      {
        id: 'product_line',
        label: 'Automation',
        content: "SUBJECT: ROBOTICS\n\nRobCo created the Unified Operating System (UOS) used on all terminals. Their robotics division produced the Protectron, Assaultron, and Securitron. Their involvement in Liberty Prime (with General Atomics) represented the pinnacle of anti-communist weaponry."
      }
    ]
  },
  {
    id: 14,
    section: "CORPORATE_DB",
    title: "WEST-TEK",
    subtitle: "Advanced Weapons Research",
    content: "The primary military contractor for the US Government. West-Tek is responsible for the two technologies that define the wasteland: Power Armor and the Forced Evolutionary Virus (FEV).",
    imagePlaceholder: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1200", // Industrial / Weaponry
    themeColor: 'green',
    lorePoints: [
      {
        id: 't_series',
        label: 'Power Armor',
        content: "SUBJECT: T-45 / T-51 / T-60\n\nOriginally designed to allow infantry to carry heavy weapons into battle against Chinese tanks. The T-60 series (seen in the show) was the final mass-production model before the war. West-Tek sought to create a 'walking tank' that required no fuel other than a fusion core."
      },
      {
        id: 'fev',
        label: 'F.E.V.',
        content: "SUBJECT: FORCED EVOLUTIONARY VIRUS\n\nInitially the 'Pan-Immunity Virion Project'. West-Tek experimented with genetic modification to create super-soldiers. The result was the Super Mutants. Though not heavily featured in Season 1, the existence of Gulpers and other hybrids suggests West-Tek's bio-engineering legacy lives on."
      }
    ]
  },
  {
    id: 15,
    section: "CORPORATE_DB",
    title: "REPCONN AEROSPACE",
    subtitle: "Rocketing to the Stars",
    content: "A company obsessed with spaceflight and plasma technology. Heavily criticized for safety violations, RepConn was eventually acquired by RobCo, but maintained its seat at the table of doom.",
    imagePlaceholder: "https://images.unsplash.com/photo-1541185933-710f5097745e?q=80&w=1200", // Rocket / Space
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'masters',
        label: 'Julia Masters',
        content: "SUBJECT: EXECUTIVE PROFILE\n\nRepConn's representative at the Vault-Tec meeting. She proposed off-world colonies as the ultimate escape for the elite. Her company's plasma weaponry research provided the basis for the Goo-ification effects seen in modern energy weapons."
      }
    ]
  },
  {
    id: 16,
    section: "CORPORATE_DB",
    title: "BIG MT",
    subtitle: "The Think Tank",
    content: "The Big Mountain Research and Development Center. A place where science was conducted without ethical, moral, or budgetary constraints. If it was weird, dangerous, and scientifically impossible, Big MT built it.",
    imagePlaceholder: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200", // Strange science
    themeColor: 'green',
    lorePoints: [
      {
        id: 'science_unbound',
        label: 'Research Philosophy',
        content: "SUBJECT: ETHICAL BYPASS\n\nBig MT executives believed that morality was an obstacle to progress. They are responsible for technologies like matter transmission (teleportation), holographic projectors, and Saturnite alloys. In the show's meeting, they represent the faction of science that views the apocalypse as just another variable to test."
      }
    ]
  },

  // --- SECTION 6: FACTION DATABASE ---
  {
    id: 17,
    section: "FACTION_DATABASE",
    title: "BROTHERHOOD OF STEEL",
    subtitle: "Ad Victoriam",
    content: "A neo-chivalric military order descended from the US Army. They worship technology but despise those who create it. In the show, they appear more religious and fanatical than previous iterations, governed by 'Clerics' and hunting tech with religious zeal.",
    imagePlaceholder: "https://images.unsplash.com/photo-1518364538800-6bae3c2db0f2?q=80&w=1200", // Helicopter / Steel
    themeColor: 'amber',
    lorePoints: [
      { 
        id: 'prydwen', 
        label: 'The Airship', 
        content: "SUBJECT: THE CASWENNAN (AIRSHIP)\n\nThe massive dirigible seen in the show (similar to the Prydwen from Fallout 4) allows the Brotherhood to project power across the continent. It serves as a mobile base, deployment platform for Vertibirds, and housing for the chapter's Elder."
      },
      { 
        id: 'codex', 
        label: 'The Codex', 
        content: "SUBJECT: BELIEF SYSTEM\n\n1. Technology ran amok caused the Great War.\n2. Humanity cannot be trusted with advanced tech.\n3. The Brotherhood must confiscate (hoard) all tech to prevent another apocalypse.\n4. Outsiders are expendable resources.\n\nThey are not heroes; they are armed hoarders with a savior complex."
      },
      { 
        id: 'knights_squires', 
        label: 'Knight/Squire Dynamic', 
        content: "SUBJECT: CHAIN OF COMMAND\n\nA Knight is the pilot of the Power Armor. A Squire is their luggage carrier/servant. The relationship is often abusive, designed to harden the Squire. Only upon the death or promotion of a Knight can a Squire ascend. This encourages a culture of internal betrayal."
      }
    ]
  },
  {
    id: 18,
    section: "FACTION_DATABASE",
    title: "THE ENCLAVE",
    subtitle: "The Deep State",
    content: "The shadowy remnants of the pre-war US Government. They exist in secrecy, possessing technology far superior to any other faction. They view themselves as the only 'pure' humans left, conducting horrific experiments on wastelanders to advance their agenda.",
    imagePlaceholder: "https://images.unsplash.com/photo-1517420704952-d9f39714a1d9?q=80&w=1200", // High tech lab
    themeColor: 'green',
    lorePoints: [
      { 
        id: 'enclave_tech', 
        label: 'Advanced Tech', 
        content: "SUBJECT: SUPERIORITY\n\nThe Enclave has maintained manufacturing capabilities since the war. Their armor, weapons, and energy production are cleaner and more advanced than the scavenged gear of the Brotherhood. They utilize mind-control tech, advanced robotics, and genetic engineering (Wilzig's research)."
      },
      { 
        id: 'pure_humanity', 
        label: 'Genetic Purity', 
        content: "SUBJECT: IDEOLOGY\n\nIf you have been exposed to wasteland radiation, you are a mutant. If you are a mutant, you are the enemy. The Enclave's ultimate goal is often genocide of the surface population to repopulate with 'pure' stock. Wilzig's defection represents a rare crack in their indoctrination."
      }
    ]
  },
  {
    id: 19,
    section: "FACTION_DATABASE",
    title: "NEW CALIFORNIA REPUBLIC",
    subtitle: "The Fallen Democracy",
    content: "The NCR was the greatest attempt to rebuild civilization. A democracy with laws, taxes, and a standing army. By the time of the show, they have been shattered by the destruction of Shady Sands, reduced to 'remnants' led by Moldaver.",
    imagePlaceholder: "https://images.unsplash.com/photo-1628169974577-c3734e56598c?q=80&w=1200", // Worn Flag / Ruins
    themeColor: 'amber',
    lorePoints: [
      { 
        id: 'ncr_ranger', 
        label: 'NCR Rangers', 
        content: "SUBJECT: ELITE FORCES\n\nThe armor worn by the 'Raiders' (and later Hank) is NCR Ranger Combat Armor (Black/Riot Gear). Historically, Rangers were the special forces of the wasteland—fearless, incorruptible, and deadly. Seeing this armor on 'bad guys' signals the corruption and collapse of the Republic's ideals."
      },
      { 
        id: 'remnants', 
        label: 'Remnant Status', 
        content: "SUBJECT: POLITICAL VACUUM\n\nWith Shady Sands gone, the NCR has devolved into warlord-led cells. Moldaver's cell is well-equipped and disciplined, but they are labeled 'Raiders' by the Brotherhood and Vault-Tec. History is written by the victors, and the NCR is currently losing."
      }
    ]
  },

  // --- SECTION 7: ASSETS & LOCATIONS ---
  {
    id: 20,
    section: "CLASSIFIED_ASSET",
    title: "COLD FUSION",
    subtitle: "The Artifact",
    content: "The severed head of Dr. Wilzig contained the key to Cold Fusion. Infinite, clean energy. The show's conflict revolves around this: whoever controls the energy controls the future. The Brotherhood wants to hoard it; the NCR wants to use it; Vault-Tec wants to bury it.",
    imagePlaceholder: "https://images.unsplash.com/photo-1470115340636-64c8d5500e39?q=80&w=1200", // Energy / Spark
    themeColor: 'green',
    lorePoints: [
      { id: 'infinite_power', label: 'Infinite Power', content: "SUBJECT: COLD FUSION\n\nIt eliminates resource scarcity, the very cause of the Great War. With it, the wasteland could be terraformed, water purified, and cities powered. It represents Hope." },
      { id: 'wilzig_sacrifice', label: 'Wilzig Legacy', content: "SUBJECT: DATA STORAGE\n\nThe technology was injected into Wilzig's brain. Biological encryption. He sacrificed himself because he knew he would slow Lucy down, but the 'Idea' (the head) had to survive." }
    ]
  },
  {
    id: 21,
    section: "LOCATION_DB",
    title: "FILLY",
    subtitle: "The Scrap Heap",
    content: "A sprawling settlement built entirely out of pre-war refuse. Filly stands as a testament to wasteland ingenuity, where trash is treasure and everything has a price. It is lawless, dirty, and alive.",
    imagePlaceholder: "https://images.unsplash.com/photo-1593926830154-8c8872b2c884?q=80&w=1200", // Scrap town / Ruins
    themeColor: 'amber',
    lorePoints: [
      { id: 'filly_eco', label: 'Scrap Economy', content: "SUBJECT: ECONOMY\n\nBottle caps reign supreme. The town is a landfill mining operation." },
      { id: 'ma_june', label: 'Ma June', content: "SUBJECT: MA JUNE\n\nFence, merchant, and secret NCR sympathizer." }
    ]
  },
  {
    id: 22,
    section: "LOCATION_DB",
    title: "VAULT 4",
    subtitle: "The Sanctuary",
    content: "A society where Vault technology meets wasteland survival, governed by the descendants of test subjects who overthrew their captors. They worship Moldaver as the Flame Mother.",
    imagePlaceholder: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1200", // Institutional / Hospital like
    themeColor: 'green',
    lorePoints: [
      { id: 'gulper_exp', label: 'Gulper Origin', content: "SUBJECT: HUMAN HYBRIDS\n\nThe Gulpers were created here. The residents bear genetic scars (one eye, etc.) but have built a compassionate society." },
      { id: 'level_12', label: 'Level 12', content: "SUBJECT: THE LABS\n\nKept as a museum of horrors to ensure history does not repeat itself." }
    ]
  },
  {
    id: 23,
    section: "LOCATION_DB",
    title: "SHADY SANDS",
    subtitle: "The Crater",
    content: "The former capital of the NCR. Destroyed by Hank MacLean. Its fall broke the back of the organized government, returning California to chaos.",
    imagePlaceholder: "https://images.unsplash.com/photo-1522850959516-58f958dfe2ad?q=80&w=1200", // Crater / Desert
    themeColor: 'amber',
    lorePoints: [
      { id: 'ncr_timeline', label: 'The Fall', content: "SUBJECT: 2277 vs 2280s\n\nControversial timeline. The chalkboard says the 'Fall' began in 2277, but the nuke likely hit later. It represents the fragility of civilization." }
    ]
  },
  {
    id: 24,
    section: "LOCATION_DB",
    title: "THE OBSERVATORY",
    subtitle: "Last Stand",
    content: "Griffith Observatory. The headquarters of Moldaver's NCR remnants and the site of the Cold Fusion activation.",
    imagePlaceholder: "https://images.unsplash.com/photo-1542407421-509146522c15?q=80&w=1200", // Observatory / Telescope
    themeColor: 'amber',
    lorePoints: [
      { id: 'high_ground', label: 'Tactical Position', content: "SUBJECT: LA BASIN\n\nOverlooks the ruins. A symbolic location for looking to the stars/future." }
    ]
  },
  {
    id: 25,
    section: "LOCATION_DB",
    title: "NEW VEGAS",
    subtitle: "The Strip",
    content: "The destination for Season 2. A city of lights controlled by Mr. House. Hank flees here, suggesting a connection between Vault-Tec and Vegas leadership.",
    imagePlaceholder: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1200", // Las Vegas / Neon
    themeColor: 'amber',
    lorePoints: [
      { id: 'mr_house_cameo', label: 'Robert House', content: "SUBJECT: ROBCO CEO\n\nSeen in the flashbacks. He runs Vegas. His involvement implies the 'Game' is bigger than just Vault-Tec." }
    ]
  },

  // --- SECTION 8: EPISODE GUIDE ---
  {
    id: 26,
    section: "EPISODE_GUIDE",
    title: "THE END",
    subtitle: "Episode 1",
    content: "In 2077, Cooper Howard performs at a birthday party as nuclear fire consumes Los Angeles. In 2296, Lucy MacLean's wedding in Vault 33 turns into a massacre when the 'groomsmen' reveal themselves as surface raiders led by Moldaver. They kidnap Overseer Hank, forcing Lucy to break protocol and open the Vault door to the wasteland.",
    imagePlaceholder: "https://images.unsplash.com/photo-1506157786151-b8491531f43e?q=80&w=1200", // Party / Cake / Ominous
    themeColor: 'green',
    lorePoints: [
      {
        id: 'vault_32_deception', 
        label: 'Vault 32 Ruse', 
        content: "SUBJECT: INFILTRATION TACTICS\n\nMoldaver's forces staged a 'Triennial Trade' with Vault 33, posing as residents of Vault 32. Upon entry, they slaughtered the welcoming party. The fact that Vault 33 did not know Vault 32 had been dead for years indicates a massive failure in inter-vault communications or a deliberate suppression of information by management."
      },
      {
        id: 'the_wedding',
        label: 'The Wedding',
        content: "SUBJECT: BREEDING PROGRAM\n\nLucy's marriage was arranged not for love, but for genetic diversity. Vault 33 exchanges citizens with 32 and 31 to prevent inbreeding. This sanitized, bureaucratic approach to human connection clashes violently with the raiders' raw brutality during the reception."
      },
      {
        id: 'first_steps',
        label: 'Surface Exit',
        content: "SUBJECT: RECLAMATION DAY (UNOFFICIAL)\n\nLucy leaves the Vault alone. The transition from the sterile, blue-tinted safety of the Vault to the blinding, sun-bleached horror of the Santa Monica coastline is the defining moment of her life. She is the 'Control' variable entering a chaotic equation."
      }
    ]
  },
  {
    id: 27,
    section: "EPISODE_GUIDE",
    title: "THE TARGET",
    subtitle: "Episode 2",
    content: "Dr. Wilzig escapes an Enclave facility with a bounty on his head. Maximus, bullied and disillusioned, watches his Knight die to a Yao Guai and makes a fateful choice to steal the Power Armor. In the scrap-town of Filly, The Ghoul engages in a terrifying shootout with Maximus and the town militia to capture Wilzig.",
    imagePlaceholder: "https://images.unsplash.com/photo-1548605380-4927cb823438?q=80&w=1200", // Dusty town / Action
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'enclave_escape',
        label: 'Enclave Defector',
        content: "SUBJECT: DR. SIGGI WILZIG\n\nWilzig was a top researcher for the Enclave. His escape with CX404 (the dog) and the Cold Fusion particle represents a massive security breach. The Enclave's willingness to incinerate their own scientists for minor infractions highlights their fascist ideology."
      },
      {
        id: 'filly_combat',
        label: 'The Shootout',
        content: "SUBJECT: BALLISTIC ANALYSIS\n\nThe Ghoul uses a customized hand cannon that fires explosive gyro-jet rounds, capable of penetrating Power Armor at weak points. The battle demonstrates that while Power Armor makes you a tank, experience makes you a killer. Maximus, untrained in the suit, struggles to maintain balance against the Ghoul's precision."
      },
      {
        id: 'yao_guai_mutation',
        label: 'Yao Guai',
        content: "SUBJECT: URSUS AMERICANUS\n\nThe 'Yao Guai' (Mutant Bear) seen attacking Knight Titus is a product of radiation and FEV exposure. Titus's cowardice in the face of the beast deconstructs the Brotherhood's myth of chivalry. Maximus killing it with a 10mm pistol is his first act of true bravery, ironically leading to his life of deception."
      }
    ]
  },
  {
    id: 28,
    section: "EPISODE_GUIDE",
    title: "THE HEAD",
    subtitle: "Episode 3",
    content: "Wilzig, mortally wounded, forces Lucy to decapitate him to transport the Cold Fusion target. The Ghoul captures Lucy, using her as bait for a giant Gulper that swallows the head. Maximus, posing as Knight Titus, takes on a new squire, Thaddeus—the very man who used to bully him.",
    imagePlaceholder: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1200", // Swamp / Water / Dark
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'gulper_ecology',
        label: 'The Gulper',
        content: "SUBJECT: GENETIC ABOMINATION\n\nThis is not a standard irradiated salamander. The presence of human fingers in its throat and its massive size suggest it is a specific experiment from Vault 4's labs. It swallowed the Artifact, turning a fetch quest into a hunt."
      },
      {
        id: 'golden_rule_fail',
        label: 'The Golden Rule',
        content: "SUBJECT: ETHICAL DEGRADATION\n\nLucy tries to apply 'The Golden Rule' to The Ghoul. He responds by using her as live bait. This episode marks the beginning of Lucy's hardening, realizing that in the Wasteland, kindness is often viewed as weakness or a trap."
      },
      {
        id: 'power_armor_maintenance',
        label: 'T-60 Logistics',
        content: "SUBJECT: SUIT LOCKDOWN\n\nWithout a squire to perform maintenance, Maximus gets trapped inside his armor. This emphasizes that the Brotherhood's strength relies on its hierarchy. The suit is a coffin if the servos fail. He is forced to rely on Thaddeus, creating a tense dynamic of mutual destruction."
      }
    ]
  },
  {
    id: 29,
    section: "EPISODE_GUIDE",
    title: "THE GHOULS",
    subtitle: "Episode 4",
    content: "The Ghoul takes Lucy to the Super Duper Mart to trade her for vials. Inside, she meets Snip Snip, a cheerful Mr. Handy robot reprogrammed to harvest organs. Lucy escapes, forced to kill for the first time, and ultimately gives The Ghoul the vials he needs to survive, confusing him with an act of mercy.",
    imagePlaceholder: "https://images.unsplash.com/photo-1623919102914-2e6b94098495?q=80&w=1200", // Abandoned store / Creepy
    themeColor: 'green',
    lorePoints: [
      {
        id: 'snip_snip',
        label: 'Snip Snip',
        content: "SUBJECT: ROBCO MR. HANDY\n\nOriginally a domestic servant robot. Snip Snip has been reprogrammed (likely by the organ harvesters) to view butchery as medical aid. His polite demeanor while attempting to saw Lucy apart is a classic Fallout juxtaposition of pre-war service and post-war horror."
      },
      {
        id: 'feral_ghouls',
        label: 'Turning Feral',
        content: "SUBJECT: NEURO-DEGENERATION\n\nCooper's friend Roger is on the verge of turning feral. The Ghoul executes him and eats him ('Ass Jerky'). This illustrates the Ghoul's inevitable fate: lose your mind or lose your humanity. Lucy giving him the vials delays this, acting as the first crack in his cynical armor."
      },
      {
        id: 'vials_mystery',
        label: 'The Vials',
        content: "SUBJECT: UNKNOWN COMPOUND\n\nThe yellow vials prevent ghoulification. They are rare, expensive, and essential. Their origin is unknown, but they are likely a byproduct of pre-war radiation research, possibly connected to the mysterious 'Management' Cooper hunts."
      }
    ]
  },
  {
    id: 30,
    section: "EPISODE_GUIDE",
    title: "THE PAST",
    subtitle: "Episode 5",
    content: "Maximus and Thaddeus bond, but the truth comes out. Thaddeus disables the armor and flees with the head. Lucy finds Maximus trapped and frees him. Together, they stumble upon the crater of Shady Sands, and Maximus reveals he was born there, shattering Lucy's belief in the Vault's mission to 'reclaim' the world.",
    imagePlaceholder: "https://images.unsplash.com/photo-1594786118579-d5007370a59c?q=80&w=1200", // Ruined bridge / City
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'shady_sands_crater',
        label: 'The Crater',
        content: "SUBJECT: GROUND ZERO\n\nFinding Shady Sands is the turning point for Lucy. She realizes civilization *had* returned—schools, trams, laws—and was destroyed again. It proves the Vaults are not the only hope, and that something destroyed the NCR to keep the Vaults relevant."
      },
      {
        id: 'fiends_encounter',
        label: 'The Fiends',
        content: "SUBJECT: CHEM-ADDICTS\n\nThe encounter on the bridge with the Fiends (Vato and his crew) highlights the mindless danger of the wastes. They don't want to talk; they want to consume. Lucy's attempt to negotiate nearly gets them killed, forcing Maximus to use lethal force."
      },
      {
        id: 'fusion_core',
        label: 'Fusion Core',
        content: "SUBJECT: AMMO RESOURCE\n\nMaximus is trapped because his Fusion Core was removed. These nuclear batteries power everything from suits to generators. Their scarcity drives much of the conflict. A T-60 without a core is just a heavy metal statue."
      }
    ]
  },
  {
    id: 31,
    section: "EPISODE_GUIDE",
    title: "THE TRAP",
    subtitle: "Episode 6",
    content: "Lucy and Maximus are captured and taken to Vault 4. They expect a dungeon but find a benevolent society of surface refugees and mutants governed by democracy. Cooper Howard's pre-war flashbacks intensify, revealing his wife Barb's deep involvement with Vault-Tec's sinister plans.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200", // Classroom / Medical
    themeColor: 'green',
    lorePoints: [
      {
        id: 'vault_4_experiment',
        label: 'Experiment #4',
        content: "SUBJECT: SCIENTIFIC GOVERNANCE\n\nVault 4 was originally run by scientists who experimented on the populace to create radiation-resistant humans (Gulpers). The subjects revolted, killed the scientists, and built a new society that integrates surface traditions with Vault tech. It is the 'Control' Vault that went rogue in the best way possible."
      },
      {
        id: 'level_12_forbidden',
        label: 'Level 12',
        content: "SUBJECT: BIO-HAZARD\n\nLucy discovers the labs on Level 12. She sees women in cryo-tubes giving birth to swamp creatures. This horror show convinces her that Vault 4 is a trap, leading to her misunderstanding of the current residents' intentions. They aren't the monsters; they are the survivors of monsters."
      },
      {
        id: 'barb_reveal',
        label: 'Barb\'s Role',
        content: "SUBJECT: EXECUTIVE OVERRIDE\n\nCooper's flashback reveals Barb is not just an employee; she is a decision-maker. She wears the 'Pip-Boy' prototype. Her discussion about 'Management' foreshadows the end of the world being a corporate decision, not a geopolitical accident."
      }
    ]
  },
  {
    id: 32,
    section: "EPISODE_GUIDE",
    title: "THE RADIO",
    subtitle: "Episode 7",
    content: "Thaddeus, fleeing with the head, meets a snake-oil salesman who 'cures' his foot but turns him into a ghoul. Norm hacks the Overseer's terminal in Vault 33 and discovers the communications with Vault 31. Lucy and Maximus are exiled from Vault 4 with supplies, their romantic bond solidifying before they part ways to finish their missions.",
    imagePlaceholder: "https://images.unsplash.com/photo-1626265774643-f1943311a86b?q=80&w=1200", // Radio / Tower / Signal
    themeColor: 'green',
    lorePoints: [
      {
        id: 'ghoul_serum',
        label: 'The Cure',
        content: "SUBJECT: MYSTERIOUS SERUM\n\nThe 'Chicken Fucker' doctor gives Thaddeus a serum that heals his crushed foot instantly but makes him immune to radiation (and pain). Thaddeus realizes he is ghoulifying when he survives an arrow through the neck. This suggests that ghoulification can be induced artificially and rapidly."
      },
      {
        id: 'buds_buds_hack',
        label: 'Project 31',
        content: "SUBJECT: TERMINAL LOGS\n\nNorm impersonates Overseer Betty. He finds that every Overseer of Vault 33 came from Vault 31. The logs refer to 'Bud's Buds'. This confirms that Vault 33 is not a democracy; it is a farm managed by a shadow government in the neighboring vault."
      },
      {
        id: 'general_atomics',
        label: 'Corporate Rivals',
        content: "SUBJECT: PRE-WAR ECONOMY\n\nFlashbacks show Cooper spying on Barb. He learns that Vault-Tec is threatened by peace negotiations. If the peace treaty is signed, the Vaults become worthless. This financial pressure is the catalyst for the apocalypse."
      }
    ]
  },
  {
    id: 33,
    section: "EPISODE_GUIDE",
    title: "THE BEGINNING",
    subtitle: "Episode 8",
    content: "The Brotherhood assaults the Observatory. Moldaver activates Cold Fusion, lighting up the wasteland. Hank is revealed as the destroyer of Shady Sands. The Ghoul shoots Hank (wearing power armor), who flees to New Vegas. Lucy, broken by the truth, joins The Ghoul to hunt the people responsible.",
    imagePlaceholder: "https://images.unsplash.com/photo-1542259681-d227376a5b7d?q=80&w=1200", // City Lights / Finale
    themeColor: 'amber',
    lorePoints: [
      {
        id: 'cold_fusion_activation',
        label: 'Cold Fusion',
        content: "SUBJECT: LIMITLESS ENERGY\n\nMoldaver succeeds. The lights of the LA basin turn on. It is a moment of pure hope, immediately crushed by the Brotherhood's invasion. The Brotherhood seizes the reactor, turning a tool of salvation into a weapon of dominance. War never changes."
      },
      {
        id: 'hank_truth',
        label: 'The War Criminal',
        content: "SUBJECT: HANK MACLEAN\n\nHank admits he dropped the bomb on Shady Sands to stop his wife from taking the kids and to ensure Vault-Tec's monopoly on civilization. He is the ultimate personification of the show's theme: The Old World refuses to let the New World be born."
      },
      {
        id: 't60_flaw',
        label: 'Design Flaw',
        content: "SUBJECT: WELDING SEAM\n\nThe Ghoul reveals a flaw in the T-60 armor he learned about during his service: a welding defect below the chest plate. He uses this knowledge to one-shot several Knights, proving that knowledge is deadlier than steel."
      }
    ]
  }
];