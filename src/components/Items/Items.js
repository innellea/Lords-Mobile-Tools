import React from 'react';

export const items = {
    infantry: {
        mainhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champions Blade
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '23.8%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blade.jpg' />
                ),
                notes: 'Champion blade is overall less powerful than Ghastly Cane, because it doesn’t give HP. Good for a mixed set.',
                other: 'Inf ATK 28%, Rng ATK 28%, Army ATK 21%, Army DEF 23.8%, Research Speed 21%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Cottageroar_Set'>
                        Ghastly Cane
                    </a>
                ),
                itemAtk: '45.5%',
                itemHP: '14%',
                itemDef: '21%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ghastly-Cane.jpg' />
                ),
                notes: 'Ghastly Cane has really good stats, however Cottageroar’s Forbidden Tome is quite costly to obtain.',
                other: '',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Terrorthorn_Set'>
                        Terror Lash
                    </a>
                ),
                itemAtk: '38.5%',
                itemHP: '0%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Lash.jpg' />
                ),
                notes: 'Terror Lash is a decent piece, but the it will divert seeds away from terror shield, so recommend upgrading after that.',
                other: 'Army Capacity 28%, Construction Speed 14%',
            },
            {
                id: 4,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Frostwing_Set'>
                        Frostwing Greatsword
                    </a>
                ),
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Frostwing-Greatsword-Lords-Mobile.jpg' />
                ),
                notes: 'Frostwing sword makes a great starter piece for Inf set.',
                other: 'Cav ATK 28%, Rng ATK 17.5%',
            },
        ],
        offhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Light
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Light.jpg' />
                ),
                notes: 'Champion Light has a very minor boost compared to the non-champ piece. Not a huge advantage unless going for the training boost, or mix inf cav stats.',
                other: 'Cav ATK 42%, Army DEF 28%, Training Speed 14%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Cottageroar_Set'>
                        Eerie Lantern
                    </a>
                ),
                itemAtk: '42',
                itemHP: '14%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Eerie-Lantern.jpg' />
                ),
                notes: 'Eerie Lantern has good stats, but pretty costly to make. Would recommend working on Ghastly Cane first.',
                other: 'Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Tidal_Titan_Set'>
                        Call of the Deep
                    </a>
                ),
                itemAtk: '21%',
                itemHP: '14%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Call-of-the-Deep.jpg' />
                ),
                notes: 'Call of the deep has good stats, but diverts Glistening Pearls from Storm Tasset. Recommend working on tasset before this.',
                other: ' Cav ATK 21%, Cav HP 14%',
            },
            {
                id: 4,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Hell_Drider_Set'>
                        Dark Aegis
                    </a>
                ),
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dark-Aegis.jpg' />
                ),
                notes: 'Dark Aegis is a great piece of gear to use in the beginning. It’s easy to make and works well in a mix set too because of it’s army stats.',
                other: ' Army ATK 14%',
            },
        ],
        helmet: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Visor
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Visor.jpg' />
                ),
                notes: 'Champ Visor gives only minor improvement in stats over beast helm, probably not worth the high price.',
                other: ' Rng ATK 35%, Army ATK 14%, Army HP 28%, Gold Production 105%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Saberfang_Set'>
                        {' '}
                        Beast Helm
                    </a>
                ),
                itemAtk: '42',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Beast-Helm.jpg' />
                ),
                notes: 'Beast helm is a great piece to make. It’s relatively easy to make since saberfang material is not used anywhere else and also a decent piece for Cav gear.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
        ],
        armor: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Mail
                    </a>
                ),
                itemAtk: '56%',
                itemHP: '21%',
                itemDef: '49%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Mail.jpg' />
                ),
                notes: 'Champion Mail is a very minor improvement over Terror Shield, not worth the high price.',
                other: 'Army ATK 14%, Army DEF 49%, Army HP 21%, Reduced Upkeep 72.8%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Terrorthorn_Set'>
                        Terror Shield
                    </a>
                ),
                itemAtk: '49',
                itemHP: '56%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Shield.jpg' />
                ),
                notes: 'Terror Shield though insanely difficult to make, has amazing stats and is the best non-champ piece to use here.',
                other: ' Army HP 21%, Research Speed 11.2%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Mecha_Trojan_Set'>
                        Firewall Plate
                    </a>
                ),
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Firewall-Plate.jpg' />
                ),
                notes: 'Firewall Plate is easier to make and is needed for Cavalry as well. It’s a good piece to use while you upgrade Terror Shield.',
                other: 'Cav ATK 42%, Siege ATK 42%, Army HP 21%',
            },
        ],
        legs: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Boots
                    </a>
                ),
                itemAtk: '70%',
                itemHP: '30.8%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Stride.jpg' />
                ),
                notes: 'Champion Boots give a 28% ATK and a 16.8% HP boost over storm tasset. Using 5 crimson manes, they are definitely a great piece to make.',
                other: 'Army ATK 14%, Army HP 30.8%, Travel Speed 70%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Tidal_Titan_Set'>
                        Storm Tasset
                    </a>
                ),
                itemAtk: '42%',
                itemHP: '14%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Storm-Tasset.jpg' />
                ),
                notes: 'Storm Tassets are the best non-champ piece, and have great stats. They are very difficult to make since they need 11 pearls, but are also a good option for a mix set.',
                other: 'Cav ATK 42%, Army DEF 28%, Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Blackwing_Set'>
                        Dragon’s Talons
                    </a>
                ),
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dragons-Talons.jpg' />
                ),
                notes: 'Dragon’s Talons are a good replacement to use while you work on Storm Tassets.',
                other: 'Rng ATK 42%, Army HP 21%',
            },
        ],
        accessories: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Blessing
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blessing.jpg' />
                ),
                notes: 'The champ pieces have the same stats as Ambrosial Cups, and definitely very costly.',
                other: ' Rng ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Faith
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Faith.jpg' />
                ),
                notes: '',
                other: 'Cav ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Ambrosial Cup
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ambrosial-Cup.jpg' />
                ),
                notes: 'Ambrosial Cups are far above any other piece, but need 13 halos and are pretty costly to upgrade.',
                other: 'Rng ATK 35%, Rng HP 35%',
            },
            {
                id: 4,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Terrorthorn_Set'>
                        Terror Vial
                    </a>
                ),
                itemAtk: '22.4%',
                itemHP: '7%',
                itemDef: '11.2%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Vial.jpg' />
                ),
                notes: 'Terror Vial is a good option for 1 or 2 slots while working on the cups.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
        ],
    },
    ranged: {
        mainhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Blade
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '23.8%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blade.jpg' />
                ),
                notes: 'The champion pieces have almost the same ranged stats as Skullcrusher, not worth it unless making for a mix set.',
                other: 'Inf ATK 28%, Rng ATK 28%, Army ATK 21%, Army DEF 23.8%, Research Speed 21%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Greatsword
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '23.8%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Greatsword.jpg' />
                ),
                notes: '',
                other: '',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Hell_Drider_Set'>
                        Skullcrusher
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Skullcrusher.jpg' />
                ),
                notes: 'Skullcrusher is the best option to use given its huge attack boost. The rare material is not needed for anything else, unless you’re working on burning scrolls. ',
                other: 'Army Capacity 28%, Construction Speed 14%, ',
            },
            {
                id: 4,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Jade_Wyrm_Set'>
                        Wyrm Rod
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '24.5%',
                itemDef: '0%',
                image: (
                    <img src='https://www.lordsmobiletools.com/assets/wyrm-rod.jpg' />
                ),
                notes: 'Wyrm Rod also has good ranged stats but would recommend using orbs for Coronet.',
                other: 'Army Capacity 28%, Construction Speed 14%, ',
            },
        ],
        offhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Lamp
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Lamp.jpg' />
                ),
                notes: 'Champ gear has not much difference in range stats compared to Eternal Codex. Would not recommend unless for a mix set.',
                other: 'Cav ATK 42%, Army DEF 28%, Training Speed 14%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Grim_Reaper_Set'>
                        Eternal Codex
                    </a>
                ),
                itemAtk: '49',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Eternal-Codex.jpg' />
                ),
                notes: 'Codex is an amazing piece of gear giving a 49% attack boost. It’s relatively easy to make too, since the Cursed Skulls are not used anywhere else.',
                other: 'Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Snow_Beast_Set'>
                        Winter Mitts
                    </a>
                ),
                itemAtk: '14%',
                itemHP: '35%',
                itemDef: '35%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Winter-Mitts.jpg' />
                ),
                notes: 'Although much lower in attack stats, winter mitts definitely make up in HP & DEF. They are easy to make and absolutely necessary for defending rallies on your castle.',
                other: ' Cav ATK 21%, Cav HP 14%',
            },
        ],
        helmet: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Visor
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Visor.jpg' />
                ),
                notes: 'Champ pieces for helmet also do not give a huge boost compared to non champ. Recommend skipping.',
                other: ' Rng ATK 35%, Army ATK 14%, Army HP 28%, Gold Production 105%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Armet
                    </a>
                ),
                itemAtk: '49',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Armet.jpg' />
                ),
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Jade_Wyrm_Set'>
                        Wyrmbone Coronet
                    </a>
                ),
                itemAtk: ' 45.5%',
                itemHP: '17.5%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Wyrmbone-Coronet.jpg' />
                ),
                notes: 'Wyrmbone Coronet offers both decent HP & DEF in addition to great range attack. Stats wise it is equal to Bumblehelm, and also comes with a research boost.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
            {
                id: 4,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Queen_Bee_Set'>
                        Bumblehelm
                    </a>
                ),
                itemAtk: '42',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Bumblehelm.jpg' />
                ),
                notes: 'You might be making Bumblehelm for Cavalry anyway, but you’d have to divide your jewels if you use it for range as well, so would suggest coronet over this.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
        ],
        armor: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Plate
                    </a>
                ),
                itemAtk: '56%',
                itemHP: '35%',
                itemDef: '59.5%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Plate.jpg' />
                ),
                notes: 'Champion Plate has good stats and also gives reduced upkeep. It was a great upgrade over Hardened Carapace, but becomes less of an improvement over Beastly Breastplate.',
                other: 'Army ATK 14%, Army DEF 49%, Army HP 21%, Reduced Upkeep 72.8%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Hootclaw_Set'>
                        Beastly Breastplate
                    </a>
                ),
                itemAtk: '49',
                itemHP: '21%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Beastly-Breastplate.jpg' />
                ),
                notes: 'Breastplate has amazing stats for non champ gear, however it is too costly right now. May be best to wait until it shows up in some cheaper pack or lab / tycoon.',
                other: ' Army HP 21%, Research Speed 11.2%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Queen_Bee_Set'>
                        Hardened Carapace
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '0%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Hardened-Carapace-1.jpg' />
                ),
                notes: 'Hardened Carapace is easy to make, but sadly takes away venoms from Bumblehelm.',
                other: 'Cav ATK 42%, Siege ATK 42%, Army HP 21%',
            },
        ],
        legs: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Boots
                    </a>
                ),
                itemAtk: '70%',
                itemHP: '30.8%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Boots.jpg' />
                ),
                notes: 'Champion Boots give a pretty good boost and are relatively cheap to make using only 5 Crimson Manes.',
                other: 'Army ATK 14%, Army HP 30.8%, Travel Speed 70%',
            },

            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Blackwing_Set'>
                        Dragon’s Talons
                    </a>
                ),
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dragons-Talons.jpg' />
                ),
                notes: 'Dragon’s Talons have a decent boost for non-champ gear, and can work for a mix set as well.',
                other: 'Rng ATK 42%, Army HP 21%',
            },
        ],
        accessories: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Blessing
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blessing.jpg' />
                ),
                notes: 'The champ pieces have the same stats as Ambrosial Cups, and definitely very costly.',
                other: ' Rng ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Valor
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Valor.jpg' />
                ),
                other: 'Cav ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 3,
                itemPrimary: <a href=''>Ambrosial Cup</a>,
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ambrosial-Cup.jpg' />
                ),
                notes: 'Ambrosial Cups are far above any other piece, but need 13 halos and are pretty costly to upgrade.',
                other: 'Rng ATK 35%, Rng HP 35%',
            },
            {
                id: 4,
                itemPrimary: ' Blight Ring',
                itemAtk: '22.4%',
                itemHP: '7%',
                itemDef: '11.2%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Blight-Ring.jpg' />
                ),
                notes: 'Blight Ring is a good option to use while you upgrade your cups giving both ATK & HP stats.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
        ],
    },
    cavalry: {
        mainhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Edge
                    </a>
                ),
                itemAtk: '70%',
                itemHP: '0%',
                itemDef: '23.8%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Chamption-Edge.jpg' />
                ),
                notes: 'Champion Edge gives 70% attack, which is a pretty significant boost. Might be worth the extra cost if you are looking to get champ gear.',
                other: 'Inf ATK 28%, Rng ATK 28%, Army ATK 21%, Army DEF 23.8%, Research Speed 21%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Gawrilla_Set'>
                        Eon Axe
                    </a>
                ),
                itemAtk: '52.5%',
                itemHP: '14%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Eon-Axe.jpg' />
                ),
                notes: 'Eon Axe is the new gear from Gawrilla. It’s got a bit of extra attack and hp compared to horn cudgel, but the cost is too high to get it right now. Maybe to best to wait to get this.',
                other: '',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Gargantua_Set'>
                        Horn Cudgel
                    </a>
                ),
                itemAtk: '42%',
                itemHP: '0%',
                itemDef: '21%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Horn-Cudgel.jpg' />
                ),
                notes: 'Horn Cudgel is the best non-champ piece for infantry. However, cavalry gear requires a lot of Gargantua stuff, so recommend working on this one after Fear Drums.',
                other: 'Army Capacity 28%, Construction Speed 14%',
            },
            {
                id: 4,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Frostwing_Set'>
                        Frostwing Greatsword
                    </a>
                ),
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Frostwing-Greatsword-Lords-Mobile.jpg' />
                ),
                notes: 'Frostwing Greatsword is a good budget option, since frostwing hearts are comparatively easy to get and are not used for making any other material. This can also go in your mix set till you make skullcrusher, so overall it’s a good piece to make.',
                other: 'Cav ATK 28%, Rng ATK 17.5%',
            },
        ],
        offhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Katar
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Katar.jpg' />
                ),
                notes: 'Champion Katar is only a minor improvement over Lunar Boomerang, don’t recommend unless for mix gear.',
                other: 'Cav ATK 42%, Army DEF 28%, Training Speed 14%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Hootclaw_Set'>
                        Lunar Boomerang
                    </a>
                ),
                itemAtk: '42',
                itemHP: '21%',
                itemDef: '21%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Lunar-Boomerang.jpg' />
                ),
                notes: 'Lunar Boomerang is a relatively new piece of gear and is currently very difficult to obtain via Hootclaw. For most people would recommend waiting till it becomes available in labyrinth or tycoon.',
                other: 'Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Blackwing_Set'>
                        Dragon’s Fist
                    </a>
                ),
                itemAtk: '30.8%',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dragons-Fist.jpg' />
                ),
                notes: 'Dragon’s fist although not as strong as Boomerang, is way easier and cheaper to make. Would recommend starting out with this for most people.',
                other: ' Cav ATK 21%, Cav HP 14%',
            },
        ],
        helmet: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Helm
                    </a>
                ),
                itemAtk: '63%',
                itemHP: '49%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Helm.jpg' />
                ),
                notes: 'Champion Helm gives an extra 21% ATK and 21% HP making it far better than Bumblehelm. Another decent champ piece to make.',
                other: ' Rng ATK 35%, Army ATK 14%, Army HP 28%, Gold Production 105%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Queen_Bee_Set'>
                        Bumblehelm
                    </a>
                ),
                itemAtk: '42%',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Bumblehelm.jpg' />
                ),
                notes: 'Bumblehelm is a really strong piece of gear but is pretty difficult to obtain. It can also be used for your range set.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Saberfang_Set'>
                        Beast Helm
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Beast-Helm.jpg' />
                ),
                notes: 'Beast Helm is not as powerful as Bumblehelm, but slightly easier to make comparatively. You can also use it for your Infantry set.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
        ],
        armor: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Cuirass
                    </a>
                ),
                itemAtk: '56%',
                itemHP: '21%',
                itemDef: '49%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Cuirass.jpg' />
                ),
                notes: 'Champion Cuirass has an extra 14% ATK, which is good but not big enough to justify it’s high cost of 10 Crimson Manes.',
                other: 'Army ATK 14%, Army DEF 49%, Army HP 21%, Reduced Upkeep 72.8%',
            },

            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Mecha_Trojan_Set'>
                        Firewall Plate
                    </a>
                ),
                itemAtk: '42%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Firewall-Plate.jpg' />
                ),
                notes: 'Firewall Plate gives you huge attack & HP stats and is also necessary for mixed set. Although fairly difficult to make, the good thing is that the Ancient Blueprints are not used in making any other gear.',
                other: 'Cav ATK 42%, Siege ATK 42%, Army HP 21%',
            },
        ],
        legs: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Greaves
                    </a>
                ),
                itemAtk: '70%',
                itemHP: '30.8%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Greaves.jpg' />
                ),
                notes: 'Champion Greaves give an extra 17.5% ATK, but have 7.7% less HP and 21% less DEF. The boost is not huge compared to some other champ pieces, but the cost is relatively quite lower since it uses just 5 manes.',
                other: 'Army ATK 14%, Army HP 30.8%, Travel Speed 70%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Gargantua_Set'>
                        Gargantuan Belt
                    </a>
                ),
                itemAtk: '52.5%',
                itemHP: '38.5%',
                itemDef: '21%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Gargantuan-Belt.jpg' />
                ),
                notes: 'Gargantuan Belt is quite difficult to make, more so because all the cavalry gear requires so much of Gargantuan stuff. However, it is the best option to use.',
                other: 'Rng ATK 42%, Army HP 21%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Tidal_Titan_Set'>
                        Storm Tasset
                    </a>
                ),
                itemAtk: '42%',
                itemHP: '14%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Storm-Tasset.jpg' />
                ),
                notes: 'Storm Tasset can work as a weaker temporary replacement if you are also making it for your Infantry set, although it’s insanely difficult to upgrade.',
                other: 'Cav ATK 42%, Army DEF 28%, Army HP 14%',
            },
        ],
        accessories: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Faith
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Faith.jpg' />
                ),
                notes: 'Champion Faith & Champion Valor give a huge boost compared to Fear Drum, however they are not a huge improvement over the newer rowdy resolve. They are also extremely costly to make requiring 14 Crimson Manes, so would not recommend to make unless for the additional infantry boost for mix set.',
                other: 'Cav ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Valor
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Valor.jpg' />
                ),
                notes: '',
                other: ' Rng ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Gawrilla_Set'>
                        Rowdy Resolve
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '14%',
                itemDef: '10.5%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Rowdy-Resolve.jpg' />
                ),
                notes: 'Rowdy Resolve is the new piece of gear for Cavalry from Gawrilla. Although pretty pricey to make right now, it definitely makes up for the lack of stats in the Cavalry set from fear drums and so a good piece to make.',
                other: 'Rng ATK 35%, Rng HP 35%',
            },
            {
                id: 4,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Gargantua_Set'>
                        Fear Drum
                    </a>
                ),
                itemAtk: '22.4%',
                itemHP: '7.7%',
                itemDef: '28.2%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Fear-Drum.jpg' />
                ),
                notes: 'Fear Drum is the best non-champ accessory for cavalry. Although relatively cheaper to make requiring just 1 eye, the boosts also do not match that of Ambrosial Cups for range and infantry.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
        ],
    },
    mixed: {
        mainhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Hell_Drider_Set'>
                        Skullcrusher
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Rng ATK 21%</li>
                        <li> Army ATK 28%</li>
                    </ul>
                ),
                itemHP: '0%',
                itemDef: (
                    <ul>
                        <li>Inf DEF 35%</li>
                    </ul>
                ),
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Skullcrusher.jpg' />
                ),
                notes: 'Skullcrusher is the best piece to use for main hand because of its 28% army attack in addition to the range attack.',
                other: 'Army Capacity 28%, Construction Speed 14%, ',
            },
            {
                id: 2,
                itemPrimary: 'Frostwing Greatsword',
                itemAtk: (
                    <ul>
                        <li>Inf ATK 28%</li>
                        <li>Cav ATK 28%</li>
                        <li>Rng ATK 17.5%</li>
                    </ul>
                ),
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Frostwing-Greatsword-Lords-Mobile.jpg' />
                ),
                notes: 'Frostwing sword lacks range stats compared to skullcrusher, but is very easy to make. It’s makes a good starter piece for a mix set.',
                other: 'Cav ATK 28%, Rng ATK 17.5%',
            },
        ],
        offhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Grim_Reaper_Set'>
                        Eternal Codex
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Rng ATK 49%</li>
                        <li>Cav ATK 28%</li>
                    </ul>
                ),
                itemHP: (
                    <ul>
                        <li>Cav HP 28%</li>
                    </ul>
                ),
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Eternal-Codex.jpg' />
                ),
                notes: 'Eternal Codex gives a great boost to range and cavalry troops and is the best piece off-hand for mixed gear to use in attacks. Also relatively easy to make since rare material does not get used anywhere else.',
                other: 'Army HP 14%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Snow_Beast_Set'>
                        Winter Mitts
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Rng ATK 14%</li>
                    </ul>
                ),
                itemHP: (
                    <ul>
                        <li>Army HP 35%</li>
                    </ul>
                ),
                itemDef: (
                    <ul>
                        <li>Inf DEF 45.5%</li>
                        <li>Army DEF 35%</li>
                    </ul>
                ),
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Winter-Mitts.jpg' />
                ),
                notes: 'Winter Mitts although low in attack boost, make up for it with the army HP boost. This becomes very important for castle defense since you have a large number of troops and boosting their HP means less of your troops die and can keep attacking for longer. I would pick this over Eternal Codex for defending rallies.',
                other: ' Cav ATK 21%, Cav HP 14%',
            },
            {
                id: 3,
                itemPrimary: 'Dark Aegis',
                itemAtk: (
                    <ul>
                        <li>Inf ATK 14%</li>
                        <li>Army ATK 14%</li>
                    </ul>
                ),
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dark-Aegis.jpg' />
                ),
                notes: 'Dark Aegis gives a good Army ATK boost and is one of the easiest to make gears in the game. Good piece for starting out.',
                other: ' Army ATK 14%',
            },
        ],
        helmet: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Queen_Bee_Set'>
                        Bumblehelm
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Cav ATK 42%</li>
                        <li>Rng ATK 42%</li>
                    </ul>
                ),
                itemHP: (
                    <ul>
                        <li>Army HP 28%</li>
                    </ul>
                ),
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Bumblehelm.jpg' />
                ),
                notes: 'Bumblehelm is the best helmet for mix gear, but very difficult to make.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Saberfang_Set'>
                        {' '}
                        Beast Helm
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Inf ATK 42%</li>
                        <li>Cav ATK 35%</li>
                    </ul>
                ),
                itemHP: (
                    <ul>
                        <li>Army HP 21%</li>
                    </ul>
                ),
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Beast-Helm.jpg' />
                ),
                notes: 'Beast helm is a slightly easier to make, but still great replacement. Extra: Travel Speed 49%',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
        ],
        armor: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Mecha_Trojan_Set'>
                        Firewall Plate
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Inf ATK 28%</li>
                        <li>Cav ATK 42%</li>
                        <li>Siege ATK 42%</li>
                    </ul>
                ),
                itemHP: 'Army HP 21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Firewall-Plate.jpg' />
                ),
                notes: 'Firewall Plate is the only piece that works well here.',
                other: 'Cav ATK 42%, Siege ATK 42%, Army HP 21%',
            },
        ],
        legs: [
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Tidal_Titan_Set'>
                        Storm Tasset
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Inf ATK 42%</li>
                        <li> Cav ATK 42%</li>
                    </ul>
                ),
                itemHP: 'Army HP 14%',
                itemDef: 'Army DEF 28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Storm-Tasset.jpg' />
                ),
                notes: 'Storm Tassets are the piece and have great stats but are very difficult to make since they need 11 pearls.',
                other: 'Cav ATK 42%, Army DEF 28%, Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Blackwing_Set'>
                        Dragon’s Talons
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Inf ATK 28%</li>
                        <li>Rng ATK 42%</li>
                    </ul>
                ),
                itemHP: 'Army HP 21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dragons-Talons.jpg' />
                ),
                notes: 'Dragon’s Talons are a good replacement to use while you work on Storm Tassets.',
                other: 'Rng ATK 42%, Army HP 21%',
            },
        ],
        accessories: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Ambrosial Cup
                    </a>
                ),
                itemAtk: (
                    <ul>
                        <li>Inf ATK 35%</li>
                        <li>Rng ATK 35%</li>
                    </ul>
                ),
                itemHP: (
                    <ul>
                        <li>Inf HP 35%</li>
                        <li>Rng HP 35%</li>
                    </ul>
                ),
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ambrosial-Cup.jpg' />
                ),
                notes: 'Ambrosial Cups are extremely hard to make and it will take a long time to upgrade all 3 cups. Recommend working on them one by one and using other pieces in the remaining slots until then.',
                other: 'Rng ATK 35%, Rng HP 35%',
            },
            {
                id: 2,
                itemPrimary: 'Burning Scroll',
                itemAtk: 'Army ATK 12.6%',
                itemHP: 'Army HP 12.6%',
                itemDef: '11.2%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/02/Burning-Scroll.jpg' />
                ),
                notes: 'Bruning Scrolls have good army atk stats, but they use Mutated Brain from Hell Drider. This is also needed for Skullcrusher so would not recommend spending too many here.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
            {
                id: 2,
                itemPrimary: 'Blight Ring',
                itemAtk: 'Rng ATK 19.6%',
                itemHP: 'Army HP 21%',
                itemDef: (
                    <ul>
                        <li>Army DEF 21%</li>
                        <li>Wall DEF Boost 35%</li>
                    </ul>
                ),
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Blight-Ring.jpg' />
                ),
                notes: 'Instead a good option might be to use Blight Ring, since it gives Army HP in addition to the range stats, and you might also be working on it for ranged gear.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
        ],
    },
    gathering: {
        mainhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champions Blade
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '23.8%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blade.jpg' />
                ),
                notes: 'Champion blade is overall less powerful than Ghastly Cane, because it doesn’t give HP. Good for a mixed set.',
                other: 'Inf ATK 28%, Rng ATK 28%, Army ATK 21%, Army DEF 23.8%, Research Speed 21%',
            },
            {
                id: 2,
                itemPrimary: 'Ghastly Cane',
                itemAtk: '45.5%',
                itemHP: '14%',
                itemDef: '21%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ghastly-Cane.jpg' />
                ),
                notes: 'Ghastly Cane has really good stats, however Cottageroar’s Forbidden Tome is quite costly to obtain.',
                other: '',
            },
            {
                id: 3,
                itemPrimary: 'Terror Lash',
                itemAtk: '38.5%',
                itemHP: '0%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Lash.jpg' />
                ),
                notes: 'Terror Lash is a decent piece, but the it will divert seeds away from terror shield, so recommend upgrading after that.',
                other: 'Army Capacity 28%, Construction Speed 14%',
            },
            {
                id: 4,
                itemPrimary: 'Frostwing Greatsword',
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Frostwing-Greatsword-Lords-Mobile.jpg' />
                ),
                notes: 'Frostwing sword makes a great starter piece for Inf set.',
                other: 'Cav ATK 28%, Rng ATK 17.5%',
            },
        ],
        offhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Light
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Light.jpg' />
                ),
                notes: 'Champion Light has a very minor boost compared to the non-champ piece. Not a huge advantage unless going for the training boost, or mix inf cav stats.',
                other: 'Cav ATK 42%, Army DEF 28%, Training Speed 14%',
            },
            {
                id: 2,
                itemPrimary: 'Eerie Lantern',
                itemAtk: '42',
                itemHP: '14%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Eerie-Lantern.jpg' />
                ),
                notes: 'Eerie Lantern has good stats, but pretty costly to make. Would recommend working on Ghastly Cane first.',
                other: 'Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: 'Call of the Deep',
                itemAtk: '21%',
                itemHP: '14%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Call-of-the-Deep.jpg' />
                ),
                notes: 'Call of the deep has good stats, but diverts Glistening Pearls from Storm Tasset. Recommend working on tasset before this.',
                other: ' Cav ATK 21%, Cav HP 14%',
            },
            {
                id: 4,
                itemPrimary: 'Dark Aegis',
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dark-Aegis.jpg' />
                ),
                notes: 'Dark Aegis is a great piece of gear to use in the beginning. It’s easy to make and works well in a mix set too because of it’s army stats.',
                other: ' Army ATK 14%',
            },
        ],
        helmet: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Queen_Bee_Set'>
                        Bumblehelm
                    </a>
                ),
                itemAtk: '42',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Bumblehelm.jpg' />
                ),
                notes: 'Bumblehelm is the best helmet for mix gear, but very difficult to make.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
            {
                id: 2,
                itemPrimary: 'Beast Helm',
                itemAtk: '42',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Beast-Helm.jpg' />
                ),
                notes: 'Beasthelm is a slightly easier to make, bt still great replacement.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
        ],
        armor: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Mail
                    </a>
                ),
                itemAtk: '56%',
                itemHP: '21%',
                itemDef: '49%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Mail.jpg' />
                ),
                notes: 'Champion Mail is a very minor improvement over Terror Shield, not worth the high price.',
                other: 'Army ATK 14%, Army DEF 49%, Army HP 21%, Reduced Upkeep 72.8%',
            },
            {
                id: 2,
                itemPrimary: 'Terror Shield',
                itemAtk: '49',
                itemHP: '56%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Shield.jpg' />
                ),
                notes: 'Terror Shield though insanely difficult to make, has amazing stats and is the best non-champ piece to use here.',
                other: ' Army HP 21%, Research Speed 11.2%',
            },
            {
                id: 3,
                itemPrimary: 'Firewall Plate',
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Firewall-Plate.jpg' />
                ),
                notes: 'Firewall Plate is easier to make and is needed for Cavalry as well. It’s a good piece to use while you upgrade Terror Shield.',
                other: 'Cav ATK 42%, Siege ATK 42%, Army HP 21%',
            },
        ],
        legs: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Boots
                    </a>
                ),
                itemAtk: '70%',
                itemHP: '30.8%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Stride.jpg' />
                ),
                notes: 'Champion Boots give a 28% ATK and a 16.8% HP boost over storm tasset. Using 5 crimson manes, they are definitely a great piece to make.',
                other: 'Army ATK 14%, Army HP 30.8%, Travel Speed 70%',
            },
            {
                id: 2,
                itemPrimary: 'Storm Tasset',
                itemAtk: '42%',
                itemHP: '14%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Storm-Tasset.jpg' />
                ),
                notes: 'Storm Tassets are the best non-champ piece, and have great stats. They are very difficult to make since they need 11 pearls, but are also a good option for a mix set.',
                other: 'Cav ATK 42%, Army DEF 28%, Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: 'Dragon’s Talons',
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dragons-Talons.jpg' />
                ),
                notes: 'Dragon’s Talons are a good replacement to use while you work on Storm Tassets.',
                other: 'Rng ATK 42%, Army HP 21%',
            },
        ],
        accessories: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Blessing
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blessing.jpg' />
                ),
                notes: 'The champ pieces have the same stats as Ambrosial Cups, and definitely very costly.',
                other: ' Rng ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Faith
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Faith.jpg' />
                ),
                notes: '',
                other: 'Cav ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Ambrosial Cup
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ambrosial-Cup.jpg' />
                ),
                notes: 'Ambrosial Cups are far above any other piece, but need 13 halos and are pretty costly to upgrade.',
                other: 'Rng ATK 35%, Rng HP 35%',
            },
            {
                id: 4,
                itemPrimary: 'Terror Vial',
                itemAtk: '22.4%',
                itemHP: '7%',
                itemDef: '11.2%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Vial.jpg' />
                ),
                notes: 'Terror Vial is a good option for 1 or 2 slots while working on the cups.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
        ],
    },
    monsterHunt: {
        mainhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champions Blade
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '23.8%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blade.jpg' />
                ),
                notes: 'Champion blade is overall less powerful than Ghastly Cane, because it doesn’t give HP. Good for a mixed set.',
                other: 'Inf ATK 28%, Rng ATK 28%, Army ATK 21%, Army DEF 23.8%, Research Speed 21%',
            },
            {
                id: 2,
                itemPrimary: 'Ghastly Cane',
                itemAtk: '45.5%',
                itemHP: '14%',
                itemDef: '21%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ghastly-Cane.jpg' />
                ),
                notes: 'Ghastly Cane has really good stats, however Cottageroar’s Forbidden Tome is quite costly to obtain.',
                other: '',
            },
            {
                id: 3,
                itemPrimary: 'Terror Lash',
                itemAtk: '38.5%',
                itemHP: '0%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Lash.jpg' />
                ),
                notes: 'Terror Lash is a decent piece, but the it will divert seeds away from terror shield, so recommend upgrading after that.',
                other: 'Army Capacity 28%, Construction Speed 14%',
            },
            {
                id: 4,
                itemPrimary: 'Frostwing Greatsword',
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Frostwing-Greatsword-Lords-Mobile.jpg' />
                ),
                notes: 'Frostwing sword makes a great starter piece for Inf set.',
                other: 'Cav ATK 28%, Rng ATK 17.5%',
            },
        ],
        offhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Light
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Light.jpg' />
                ),
                notes: 'Champion Light has a very minor boost compared to the non-champ piece. Not a huge advantage unless going for the training boost, or mix inf cav stats.',
                other: 'Cav ATK 42%, Army DEF 28%, Training Speed 14%',
            },
            {
                id: 2,
                itemPrimary: 'Eerie Lantern',
                itemAtk: '42',
                itemHP: '14%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Eerie-Lantern.jpg' />
                ),
                notes: 'Eerie Lantern has good stats, but pretty costly to make. Would recommend working on Ghastly Cane first.',
                other: 'Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: 'Call of the Deep',
                itemAtk: '21%',
                itemHP: '14%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Call-of-the-Deep.jpg' />
                ),
                notes: 'Call of the deep has good stats, but diverts Glistening Pearls from Storm Tasset. Recommend working on tasset before this.',
                other: ' Cav ATK 21%, Cav HP 14%',
            },
            {
                id: 4,
                itemPrimary: 'Dark Aegis',
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dark-Aegis.jpg' />
                ),
                notes: 'Dark Aegis is a great piece of gear to use in the beginning. It’s easy to make and works well in a mix set too because of it’s army stats.',
                other: ' Army ATK 14%',
            },
        ],
        helmet: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Visor
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Visor.jpg' />
                ),
                notes: 'Champ Visor gives only minor improvement in stats over beast helm, probably not worth the high price.',
                other: ' Rng ATK 35%, Army ATK 14%, Army HP 28%, Gold Production 105%',
            },
            {
                id: 2,
                itemPrimary: 'Beast Helm',
                itemAtk: '42',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Beast-Helm.jpg' />
                ),
                notes: 'Beasthelm is a great piece to make. It’s relatively easy to make since saberfang material is not used anywhere else and also a decent piece for Cav gear.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
        ],
        armor: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Mail
                    </a>
                ),
                itemAtk: '56%',
                itemHP: '21%',
                itemDef: '49%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Mail.jpg' />
                ),
                notes: 'Champion Mail is a very minor improvement over Terror Shield, not worth the high price.',
                other: 'Army ATK 14%, Army DEF 49%, Army HP 21%, Reduced Upkeep 72.8%',
            },
            {
                id: 2,
                itemPrimary: 'Terror Shield',
                itemAtk: '49',
                itemHP: '56%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Shield.jpg' />
                ),
                notes: 'Terror Shield though insanely difficult to make, has amazing stats and is the best non-champ piece to use here.',
                other: ' Army HP 21%, Research Speed 11.2%',
            },
            {
                id: 3,
                itemPrimary: 'Firewall Plate',
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Firewall-Plate.jpg' />
                ),
                notes: 'Firewall Plate is easier to make and is needed for Cavalry as well. It’s a good piece to use while you upgrade Terror Shield.',
                other: 'Cav ATK 42%, Siege ATK 42%, Army HP 21%',
            },
        ],
        legs: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Boots
                    </a>
                ),
                itemAtk: '70%',
                itemHP: '30.8%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Stride.jpg' />
                ),
                notes: 'Champion Boots give a 28% ATK and a 16.8% HP boost over storm tasset. Using 5 crimson manes, they are definitely a great piece to make.',
                other: 'Army ATK 14%, Army HP 30.8%, Travel Speed 70%',
            },
            {
                id: 2,
                itemPrimary: 'Storm Tasset',
                itemAtk: '42%',
                itemHP: '14%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Storm-Tasset.jpg' />
                ),
                notes: 'Storm Tassets are the best non-champ piece, and have great stats. They are very difficult to make since they need 11 pearls, but are also a good option for a mix set.',
                other: 'Cav ATK 42%, Army DEF 28%, Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: 'Dragon’s Talons',
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dragons-Talons.jpg' />
                ),
                notes: 'Dragon’s Talons are a good replacement to use while you work on Storm Tassets.',
                other: 'Rng ATK 42%, Army HP 21%',
            },
        ],
        accessories: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Blessing
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blessing.jpg' />
                ),
                notes: 'The champ pieces have the same stats as Ambrosial Cups, and definitely very costly.',
                other: ' Rng ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Faith
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Faith.jpg' />
                ),
                notes: '',
                other: 'Cav ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Ambrosial Cup
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ambrosial-Cup.jpg' />
                ),
                notes: 'Ambrosial Cups are far above any other piece, but need 13 halos and are pretty costly to upgrade.',
                other: 'Rng ATK 35%, Rng HP 35%',
            },
            {
                id: 4,
                itemPrimary: 'Terror Vial',
                itemAtk: '22.4%',
                itemHP: '7%',
                itemDef: '11.2%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Vial.jpg' />
                ),
                notes: 'Terror Vial is a good option for 1 or 2 slots while working on the cups.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
        ],
    },
    familiars: {
        mainhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champions Blade
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '23.8%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blade.jpg' />
                ),
                notes: 'Champion blade is overall less powerful than Ghastly Cane, because it doesn’t give HP. Good for a mixed set.',
                other: 'Inf ATK 28%, Rng ATK 28%, Army ATK 21%, Army DEF 23.8%, Research Speed 21%',
            },
            {
                id: 2,
                itemPrimary: 'Ghastly Cane',
                itemAtk: '45.5%',
                itemHP: '14%',
                itemDef: '21%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ghastly-Cane.jpg' />
                ),
                notes: 'Ghastly Cane has really good stats, however Cottageroar’s Forbidden Tome is quite costly to obtain.',
                other: '',
            },
            {
                id: 3,
                itemPrimary: 'Terror Lash',
                itemAtk: '38.5%',
                itemHP: '0%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Lash.jpg' />
                ),
                notes: 'Terror Lash is a decent piece, but the it will divert seeds away from terror shield, so recommend upgrading after that.',
                other: 'Army Capacity 28%, Construction Speed 14%',
            },
            {
                id: 4,
                itemPrimary: 'Frostwing Greatsword',
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Frostwing-Greatsword-Lords-Mobile.jpg' />
                ),
                notes: 'Frostwing sword makes a great starter piece for Inf set.',
                other: 'Cav ATK 28%, Rng ATK 17.5%',
            },
        ],
        offhand: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Light
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '0%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Light.jpg' />
                ),
                notes: 'Champion Light has a very minor boost compared to the non-champ piece. Not a huge advantage unless going for the training boost, or mix inf cav stats.',
                other: 'Cav ATK 42%, Army DEF 28%, Training Speed 14%',
            },
            {
                id: 2,
                itemPrimary: 'Eerie Lantern',
                itemAtk: '42',
                itemHP: '14%',
                itemDef: '14%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Eerie-Lantern.jpg' />
                ),
                notes: 'Eerie Lantern has good stats, but pretty costly to make. Would recommend working on Ghastly Cane first.',
                other: 'Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: 'Call of the Deep',
                itemAtk: '21%',
                itemHP: '14%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Call-of-the-Deep.jpg' />
                ),
                notes: 'Call of the deep has good stats, but diverts Glistening Pearls from Storm Tasset. Recommend working on tasset before this.',
                other: ' Cav ATK 21%, Cav HP 14%',
            },
            {
                id: 4,
                itemPrimary: 'Dark Aegis',
                itemAtk: '28%',
                itemHP: '0%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dark-Aegis.jpg' />
                ),
                notes: 'Dark Aegis is a great piece of gear to use in the beginning. It’s easy to make and works well in a mix set too because of it’s army stats.',
                other: ' Army ATK 14%',
            },
        ],
        helmet: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Visor
                    </a>
                ),
                itemAtk: '49%',
                itemHP: '28%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Visor.jpg' />
                ),
                notes: 'Champ Visor gives only minor improvement in stats over beast helm, probably not worth the high price.',
                other: ' Rng ATK 35%, Army ATK 14%, Army HP 28%, Gold Production 105%',
            },
            {
                id: 2,
                itemPrimary: 'Beast Helm',
                itemAtk: '42',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Beast-Helm.jpg' />
                ),
                notes: 'Beasthelm is a great piece to make. It’s relatively easy to make since saberfang material is not used anywhere else and also a decent piece for Cav gear.',
                other: 'Cav ATK 35%, Army HP 21%, Travel Speed 49%',
            },
        ],
        armor: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Mail
                    </a>
                ),
                itemAtk: '56%',
                itemHP: '21%',
                itemDef: '49%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Mail.jpg' />
                ),
                notes: 'Champion Mail is a very minor improvement over Terror Shield, not worth the high price.',
                other: 'Army ATK 14%, Army DEF 49%, Army HP 21%, Reduced Upkeep 72.8%',
            },
            {
                id: 2,
                itemPrimary: 'Terror Shield',
                itemAtk: '49',
                itemHP: '56%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Shield.jpg' />
                ),
                notes: 'Terror Shield though insanely difficult to make, has amazing stats and is the best non-champ piece to use here.',
                other: ' Army HP 21%, Research Speed 11.2%',
            },
            {
                id: 3,
                itemPrimary: 'Firewall Plate',
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Firewall-Plate.jpg' />
                ),
                notes: 'Firewall Plate is easier to make and is needed for Cavalry as well. It’s a good piece to use while you upgrade Terror Shield.',
                other: 'Cav ATK 42%, Siege ATK 42%, Army HP 21%',
            },
        ],
        legs: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Boots
                    </a>
                ),
                itemAtk: '70%',
                itemHP: '30.8%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Stride.jpg' />
                ),
                notes: 'Champion Boots give a 28% ATK and a 16.8% HP boost over storm tasset. Using 5 crimson manes, they are definitely a great piece to make.',
                other: 'Army ATK 14%, Army HP 30.8%, Travel Speed 70%',
            },
            {
                id: 2,
                itemPrimary: 'Storm Tasset',
                itemAtk: '42%',
                itemHP: '14%',
                itemDef: '28%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Storm-Tasset.jpg' />
                ),
                notes: 'Storm Tassets are the best non-champ piece, and have great stats. They are very difficult to make since they need 11 pearls, but are also a good option for a mix set.',
                other: 'Cav ATK 42%, Army DEF 28%, Army HP 14%',
            },
            {
                id: 3,
                itemPrimary: 'Dragon’s Talons',
                itemAtk: '28%',
                itemHP: '21%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Dragons-Talons.jpg' />
                ),
                notes: 'Dragon’s Talons are a good replacement to use while you work on Storm Tassets.',
                other: 'Rng ATK 42%, Army HP 21%',
            },
        ],
        accessories: [
            {
                id: 1,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Blessing
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Blessing.jpg' />
                ),
                notes: 'The champ pieces have the same stats as Ambrosial Cups, and definitely very costly.',
                other: ' Rng ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 2,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Champion Faith
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Champion-Faith.jpg' />
                ),
                notes: '',
                other: 'Cav ATK 21%, Army ATK 14%, Army HP 35%',
            },
            {
                id: 3,
                itemPrimary: (
                    <a href='https://lordsmobile.fandom.com/wiki/Equipment/Champion_Set'>
                        Ambrosial Cup
                    </a>
                ),
                itemAtk: '35%',
                itemHP: '35%',
                itemDef: '0%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Ambrosial-Cup.jpg' />
                ),
                notes: 'Ambrosial Cups are far above any other piece, but need 13 halos and are pretty costly to upgrade.',
                other: 'Rng ATK 35%, Rng HP 35%',
            },
            {
                id: 4,
                itemPrimary: 'Terror Vial',
                itemAtk: '22.4%',
                itemHP: '7%',
                itemDef: '11.2%',
                image: (
                    <img src='https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Vial.jpg' />
                ),
                notes: 'Terror Vial is a good option for 1 or 2 slots while working on the cups.',
                other: 'Army DEF 11.2%, Ore Production 49%',
            },
        ],
    },
};

export const jewels = {
    infantry: {
        '3OayPUASk1JJFJwpKW7u': {
            id: '3OayPUASk1JJFJwpKW7u',
            name: 'Infantry ATK Jewel ',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Infantry-ATK-Jewel.jpg',
            effects: ['Inf ATK 20%'],
        },
        '5N3y7DfjZwFTPxoyg3La': {
            id: '5N3y7DfjZwFTPxoyg3La',
            name: 'Terror Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Terror-Jewel.jpg',
            effects: ['Inf ATK 10%', 'Inf DEF 10%'],
        },
        '7mOdjVqp9co87Ymkvk9F': {
            id: '7mOdjVqp9co87Ymkvk9F',
            name: 'Trojan Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Trojan-Jewel.jpg',
            effects: ['Inf HP 15%', 'Travel Speed 5%'],
        },
    },
    ranged: {
        G6qQaEqzWcMytMI3W7re: {
            id: 'G6qQaEqzWcMytMI3W7re',
            name: 'Ranged ATK Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Ranged-ATK-Jewel.jpg',
            effects: ['Rng ATK 20%'],
        },
        HF8vtnhZS0xeBB8kPLJZ: {
            id: 'HF8vtnhZS0xeBB8kPLJZ',
            name: 'Wyrm Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Wrym-Jewel.jpg',
            effects: ['Rng ATK 10%', 'Rng DEF 10%'],
        },
        RIatpdNzjYeRc4JmJ8y9: {
            id: 'RIatpdNzjYeRc4JmJ8y9',
            name: 'Grim Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Grim-Jewel.jpg',
            effects: ['Rng HP 15%', 'Travel Speed 5%'],
        },
    },
    cavalry: {
        SWd1lptNeW5rnZvKgEco: {
            id: 'SWd1lptNeW5rnZvKgEco',
            name: 'Cavalry ATK Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Cavalry-ATK-Jewel.jpg',
            effects: ['Cav ATK 20%'],
        },
        UHjQnPUGFzaV4RWqiNOZ: {
            id: 'UHjQnPUGFzaV4RWqiNOZ',
            name: 'Gargantua Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Gargantua-Jewel.jpg',
            effects: ['Cav ATK 10%', 'Cav DEF 10% '],
        },
        VV1QtU8lZvjmU6m4rRAP: {
            id: 'VV1QtU8lZvjmU6m4rRAP',
            name: 'Saber Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Saber-Jewel.jpg',
            effects: ['Cav HP 15%', 'Travel Speed 5%'],
        },
    },
    mixed: {
        '3OayPUASk1JJFJwpKW7u': {
            id: '3OayPUASk1JJFJwpKW7u',
            name: 'Infantry ATK Jewel ',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Infantry-ATK-Jewel.jpg',
            effects: ['Inf ATK 20%'],
        },
        G6qQaEqzWcMytMI3W7re: {
            id: 'G6qQaEqzWcMytMI3W7re',
            name: 'Ranged ATK Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Ranged-ATK-Jewel.jpg',
            effects: ['Rng ATK 20%'],
        },
        SWd1lptNeW5rnZvKgEco: {
            id: 'SWd1lptNeW5rnZvKgEco',
            name: 'Cavalry ATK Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/01/Cavalry-ATK-Jewel.jpg',
            effects: ['Cav ATK 20%'],
        },
        SWdslptNeW5rnZvKgEco: {
            id: 'SWdslptNeW5rnZvKgEco',
            name: 'Champion Jewel',
            url: 'https://lordsmobilepro.com/wp-content/uploads/2021/02/Champion-Jewel.jpg',
            effects: ['Army HP 15%', 'Travel Speed 20%'],
        },
    },
};

export const endNotes = {
    gear: {
        infantry:
            'Infantry Gear is one of tougher sets to build in the game because of Terrorthorn and Tidal Titan equipment in addition to Ambrosial Cups from Bon Appeti. Will recommend using Terror Seeds and Glistening Pearls judiciously to only build the final pieces that you want to use.',

        ranged: 'Range Gear is one of easier to build sets in the game and for a lot of players will be their strongest set to hit with. I would recommend starting on 1 Ambrosial Cup first and using Blight Rings for the other slots while you upgrade them.',
        cavalry:
            'Cavalry Gear was very heavily dependent on Gargantuan materials, so it becomes difficult to build all the pieces at once. With the new monster (Gawrilla) out now, the requirements seem slightly more balanced. That said, the Gawrilla equipment is too costly to buy right now, so unless a cheaper pack becomes available, for most people working on Fear Drums and Gargantuan Belt might still be the better option.',
        mixed: 'Mixed gear is slightly subjective, and varies based on the situation. It may be good to have balanced stats for some cases, or boost your frontline in others. HP also plays a very important role in defense and is an important factor to consider. As a general rule it’s best to use gear that boosts all 3 or at least 2 troop types.',
    },
};

export const sets = {
    gear: {
        rangedChamp:
            'https://lordsmobilepro.com/wp-content/uploads/2021/01/Ranged-ATK-Gear-Full-Champ-Lords-Mobile-e1618443617903-1536x1255.jpeg',
        rangedNonChamp:
            "https://lordsmobilepro.com/wp-content/uploads/2021/01/Ranged-ATK-Gear-Non-Champ-Lords-Mobile-e1618443967645-1536x1274.jpeg'",
    },
};
