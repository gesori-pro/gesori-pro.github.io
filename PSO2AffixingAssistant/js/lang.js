/**
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2018  Arthur Malulley B. de O.
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

const lang = Object.freeze({
    "app": {
        appTitle: {
            en: "PSO2 Affixing Assistant",
            jp: "PSO2合成アシスタント",
            ko: "PSO2 합성 어시스턴트"
        },
        subHeader: {
            en: "How it works:",
            jp: "使い方：",
            ko: "사용방법 : "
        },
        goalFodderTitle: {
            en: "GOAL",
            jp: "ゴール",
            ko: "목표"
        },
        mainFodderTitle: {
            en: "Main Fodder",
            jp: "主装備",
            ko: "주요 장비"
        },
        fodderTitle: {
            en: "Fodder",
            jp: "装備",
            ko: "장비"
        },
        materialTitle: {
            en: "Material Fodder",
            jp: "材料装備",
            ko: "소재 장비"
        },
        affixLabel: {
            en: "AFFIX IT",
            jp: "合成",
            ko: "합성"
        },
        reAffixLabel: {
            en: "RE-AFFIX IT",
            jp: "再合成",
            ko: "재합성"
        },
        cannotAffixLabel: {
            en: "CANNOT AFFIX",
            jp: "塞がり",
            ko: "합성 불가"
        },
        transplantLabel: {
            en: "TRANSPLANT IT",
            jp: "移植",
            ko: "이식"
        },
        reTransplantLabel: {
            en: "RE-TRANSPLANT IT",
            jp: "再移植",
            ko: "재이식"
        },
        cannotTransplantLabel: {
            en: "CANNOT TRANSPLANT",
            jp: "移植不可能",
            ko: "이식 불가능"
        },
        stageSuccessLabel: {
            en: "Stage Success",
            jp: "ステージの成功",
            ko: "스테이지 성공"
        },
        abilitySuccessSpanTitle: {
            en: (rate) => `${rate}% chance of transfering this ability`,
            jp: (rate) => `この能力を${rate}％の確率で譲渡する`,
            ko: (rate) => `이 능력을${rate}％의 확률로 양도`
        },
        stageTransplantCostLabel: {
            en: "Stage Transplant Cost",
            jp: "ステージ移植費用",
            ko: "스테이지 이식 비용"
        },
        fodderTransplantCostLabel: {
            en: "Transplant Cost",
            jp: "移植費用",
            ko: "이식 비용"
        },
        factorLabel: {
            en: "Special Ability Factor",
            jp: "特殊能力因子",
            ko: "특수능력 인자"
        },
        fodderSuccessDivTitle: {
            en: "Success in making this equipment",
            jp: "この機器の製造に成功",
            ko: "이 장비 제조 성공"
        },
        goalLabel: {
            en: "Goal",
            jp: "ゴール",
            ko: "목표"
        },
        fodderLabel: {
            en: "Fodder",
            jp: "装備",
            ko: "장비"
        },
        fodderSuccessLabel: {
            en: "Success",
            jp: "成功率",
            ko: "성공률"
        },
        sameEquipLabel: {
            en: "Same Equipment",
            jp: "同じ機器",
            ko: "같은 장비"
        },
        sameEquipDescription: {
            en: "Is fodder made with identical equipment?",
            jp: "それは同じ装置で作られていますか？",
            ko: "같은 이름의 장비로 만드나요?"
        },
        rateBoostDescription: {
            en: "Is fodder using Affix Boost Item?",
            jp: "合成ブーストアイテムが使用されていますか？",
            ko: "합성 부스트 아이템을 사용하나요?"
        },
        potDescription: {
            en: "Does equipment have potential that boosts affixing?",
            jp: "装置は合成を促進する 潜在能力を持っていますか？",
            ko: "장비가 합성 확률을 늘리는 잠재능력을 가지고 있나요?"
        },
        boostWeekOption: {
            en: (option) => `+${option}% Boost Week`,
            jp: (option) => `+${option}%ブーストウィーク`,
            ko: (option) => `+${option}% 부스트 위크`
        },
        boostWeekDescription: {
            en: "Additional affixing boost from boost week",
            jp: "ブースト週間からの追加の固定ブースト",
            ko: "ブースト週間からの追加の固定ブースト"
        },
        rateStarsRequest: {
            en: "Rate the New Formula?",
            jp: "新しい式を評価しますか？",
            ko: "新しい式を評価しますか？"
        },
        rateStarsRated: {
            en: "Thank You!",
            jp: "ありがとう！",
            ko: "ありがとう！"
        },
        rateStars1AltText: {
            en: "Terrible",
            jp: "ひどい",
            ko: "ひどい"
        },
        rateStars2AltText: {
            en: "Bad",
            jp: "悪い",
            ko: "悪い"
        },
        rateStars4AltText: {
            en: "Great",
            jp: "良い",
            ko: "良い"
        },
        rateStars5AltText: {
            en: "Incredible",
            jp: "すごい",
            ko: "すごい"
        },
        shareFormulaTitle: {
            en: "Link to This Formula",
            jp: "この数式へのリンク",
            ko: "この数式へのリンク"
        },
        shareFormulaButton: {
            en: "Copy to Clipboard (Long)",
            jp: "クリップボードにコピー(長いです)",
            ko: "クリップボードにコピー(長いです)"
        },
        shareFormulaButtonShort: {
            en: "Copy to Clipboard (Short)",
            jp: "クリップボードにコピー(ショート)",
            ko: "クリップボードにコピー(ショート)"
        },
        openInSimButton: {
            en: "Open in Affix Simulator",
            jp: "合成シミュレータで開く",
            ko: "合成シミュレータで開く"
        },
        closeButton: {
            en: "Close",
            jp: "閉じる",
            ko: "閉じる"
        },
        filterSearchPlaceholder: {
            en: "Search affixes..",
            jp: "能力を検索する。。",
            ko: "능력 검색"
        },
        filterSearchTitle: {
            en: "Type in an ability name",
            jp: "能力名を入力して",
            ko: "能力名を入力して"
        },
        excludeSearchPlaceholder: {
            en: "Exclude affixes (,)",
            jp: "能力を除外（、）",
            ko: "能力を除外（、）"
        },
        excludeSearchTitle: {
            en: "Type in ability names to exclude separated by comma",
            jp: "除外する能力名をコンマで区切って入力します",
            ko: "除外する能力名をコンマで区切って入力します"
        },
        excludeSearchBtn: {
            en: "Toggle to exclude results",
            jp: "結果を除外するトグル",
            ko: "結果を除外するトグル"
        },
        chooseAffixTitle: {
            en: "Choose Abilities",
            jp: "能力を選ぶ",
            ko: "能力を選ぶ"
        },
        chooseMethodTitle: {
            en: "Choose Method of Making",
            jp: "作り方を選ぶ",
            ko: "作り方を選ぶ"
        },
        reviewTweakTitle: {
            en: "Review and Tweak",
            jp: "レビューと微調整",
            ko: "レビューと微調整"
        },
        reviewTweakTooltip1: {
            en: "Select abilities to change places",
            jp: "場所を変更する能力を選択する",
            ko: "場所を変更する能力を選択する"
        },
        reviewTweakTooltip2: {
            en: "And press confirm when ready",
            jp: "準備ができたら確定を押してください",
            ko: "準備ができたら確定を押してください"
        },
        transplantTitle: {
            en: "Special Ability Transplant",
            jp: "特殊能力移植",
            ko: "특수 능력 이식"
        },
        transplantTooltip: {
            en: "<strong>WARNING</strong>: The formula below will cause the Material Fodder to lose some ability slots.",
            jp: "<strong>警告</strong>: 以下の式では、マテリアルフォダーが一部の能力スロットを失います。",
            ko: "<strong>警告</strong>: 以下の式では、マテリアルフォダーが一部の能力スロットを失います。"
        },
        transplantOptionsLabel: {
            en: "Transplant Options:",
            jp: "移植オプション",
            ko: "이식 옵션"
        },
        transplantMaterialSlotLabel: {
            en: "Material Slot",
            jp: "材料のスロット数",
            ko: "材料のスロット数"
        },
        transplantAddAbilityItemLabel: {
            en: "Add Ability Item",
            jp: "特殊能力追加",
            ko: "특수 능력 추가"
        },
        selectButton: {
            en: "Select",
            jp: "選択する",
            ko: "선택하기"
        },
        cancelButton: {
            en: "Cancel",
            jp: "キャンセル",
            ko: "취소"
        },
        resetButton: {
            en: "Reset",
            jp: "リセット",
            ko: "리셋"
        },
        affixingTitle: {
            en: "Affixing",
            jp: "合成",
            ko: "합성"
        },
        reportIssueTitle: {
            en: "Uh oh...",
            jp: "ええとああ。。。",
            ko: "앗... 아아......."
        },
        reportIssueDescription: {
            en: "Something went wrong while building this affixing formula. Would you like to report this problem?",
            jp: "この式を作成中に何かがうまくいかなかった。この問題を報告しますか？",
            ko: "대충 버그가 있어서 문제 보고 할꺼냔 내용"
        },
        reportIssueButtonLabel: {
            en: "Open GitHub Issues Page",
            jp: "GitHubの問題ページを開く",
            ko: "GitHub 페이지로 이동"
        },
        formulaSheetTitle: {
            en: "Affixing Formula Sheet",
            jp: "合成フォーミュラシート",
            ko: "합성 포뮬러 시트"
        },
        affixUse: {
            en: (successRate, affixName, choicesString) => `${successRate}% Making ${affixName} with: ${choicesString}`,
            jp: (successRate, affixName, choicesString) => `${successRate}%と一緒に${affixName}を作る: ${choicesString}`,
            ko: (successRate, affixName, choicesString) => `${successRate}%와(과) 함께 ${affixName}을(를) 만든다 : ${choicesString}`
        },
        wishListTitle: {
            en: "Materials Needed",
            jp: "必要な材料",
            ko: "필요한 재료"
        },
        wishListItemDivider: {
            en: ', ',
            jp: '、',
            ko: ', '
        },
        wishListFactorDescription: {
            en: (name) => ` (Special Ability Factor: ${name})`,
            jp: (name) => `（特殊能力因子：${name}）`,
            ko: (name) => `（특수 능력 인자：${name}）`
        },
        wishListAbilityItem: {
            en: (fodder) => `${fodder.size()}s Fodder: ${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `Any Junk` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_en).sort().join(lang.app.wishListItemDivider.en)}`,
            jp: (fodder) => `${fodder.size()}スロット装備：${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `ジャンク` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_jp).sort().join(lang.app.wishListItemDivider.jp)}`,
            ko: (fodder) => `${fodder.size()}슬롯 장비 : ${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `정크` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_ko).sort().join(lang.app.wishListItemDivider.ko)}`
        },
        wishListAbilityDescription: {
            en: (amount, description) => `${(amount > 1) ? `(${amount}x) ` : ``}${description}`,
            jp: (amount, description) => `${(amount > 1) ? `（${amount}倍）` : ``}${description}`,
            ko: (amount, description) => `${(amount > 1) ? `（${amount}배）` : ``}${description}`
        },
        wishListTransplantCostDescr: {
            en: (count) => `${count} Special Ability Transplant Pass${count > 1 ? `es` : ``}`,
            jp: (count) => `${count}特殊能力移植パス`,
            ko: (count) => `${count}특수 능력 추가 패스`
        },
        upslottingLabel: {
            en: "Affix By Upslotting",
            jp: "増加カウントによる合成",
            ko: "슬롯 추가 사용"
        },
        upslottingDescription: {
            en: "Using equipment with less slots to make gear with more slots",
            jp: "より少ないスロットの装置を使用して、より多くのスロットを備えたギアを作る",
            ko: "더욱 많은 슬롯의 장비를 사용하여 더 많은 슬롯을 가진 장비를 만든다"
        },
        spreadLabel: {
            en: "Use All Six Fodders",
            jp: "6つの合成スロットをすべて使用する",
            ko: "6개의 합성 슬롯을 모두 사용"
        },
        spreadDescription: {
            en: "Makes it cheaper to produce the intermediary equipment",
            jp: "仲介機器を生産するのが安くなる",
            ko: "중간 장비 생산 비용 절감"
        },
        trainerLabel: {
            en: "Guidance Trainer +5%",
            jp: "錬成の導き",
            ko: "연성의 인도"
        },
        trainerDescription: {
            en: "Increases affixing success rate by 5% (it must be in the main fodder)",
            jp: "特殊能力の成功率を5％上昇させる(それは主装備の中にある必要があります)",
            ko: "특수 능력의 성공률을 5% 상승시킨다 (메인 장비에 달려있어야함)"
        },
        affixingSelectionTitle: {
            en: "Affixing Goal",
            jp: "合成目標",
            ko: "합성 목표"
        },
        statsViewerTitle: {
            en: "Stats",
            jp: "状態",
            ko: "상태"
        },
        affixChoices: {
            en: "Choices",
            jp: "選択肢",
            ko: "선택지"
        },
        affixChoiceLabel: {
            en: "Affix",
            jp: "合成",
            ko: "합성"
        },
        abilityListTitle: {
            en: "Ability",
            jp: "能力",
            ko: "능력"
        },
        abilityFormulasTitle: {
            en: "How To Make",
            jp: "作成方法",
            ko: "작성 방법"
        },
        abilityFormulaUsesTitle: {
            en: "Used To Make",
            jp: "合成に使用",
            ko: "合成に使用"
        },
        warningMsg: {
            en: abilities => `WARNING! The following abilities can only be transferred via Special Ability Transplant: ${abilities.reduce((a, b, c) => a + (c === 0 ? '' : ', ') + b )}`,
            jp: abilities => `警告！以下の能力は、特殊能力移植でのみ譲渡できます:${abilities.reduce((a, b, c) => a + (c === 0 ? '' : '、') + b)}`,
            ko: abilities => `경고! 해당 능력은 특수 능력 이식으로만 인계 가능합니다 : ${abilities.reduce((a, b, c) => a + (c === 0 ? '' : '、') + b)}`
        },
        cancelButton: {
            en: "Cancel",
            jp: "取消",
            ko: "취소"
        },
        transplantButton: {
            en: "Transplant",
            jp: "移植",
            ko: "이식"
        },
        affixButton: {
            en: "Affix",
            jp: "合成",
            ko: "합성"
        },
        confirmButton: {
            en: "Confirm",
            jp: "確認",
            ko: "확인"
        },
        menuStartNewDescription: {
            en: "Check or change the affixing goal",
            jp: "合成目標を確定または変更する",
            ko: "合成目標を確定または変更する"
        },
        menuWishListDescription: {
            en: "View fodders needed",
            jp: "必要な装備を見る",
            ko: "必要な装備を見る"
        },
        menuFormulaSheetDescription: {
            en: "View affixing formula sheet",
            jp: "合成式の表示",
            ko: "合成式の表示"
        },
        menuShareDescription: {
            en: "Share the link to this affixing formula",
            jp: "この合成式へのリンクを共有する",
            ko: "この合成式へのリンクを共有する"
        },
        menuLanguageDescription: {
            en: "Switch languase (japanese/日本語)",
            jp: "スイッチランゲージ（英語/English）",
            ko: "スイッチランゲージ（英語/English）"
        },
        menuThemesDescription: {
            en: "Change application theme",
            jp: "アプリケーションのテーマを変更する",
            ko: "アプリケーションのテーマを変更する"
        },
        menuTargetDescription: {
            en: "Display affixing goal",
            jp: "合成目標を表示する",
            ko: "合成目標を表示する"
        },
        menuBugDescription: {
            en: "Report a problem",
            jp: "問題を報告",
            ko: "問題を報告"
        },
        malulleybovo: {
            en: "by malulleybovo",
            jp: "malulleybovoから",
            ko: "malulleybovoから"
        }
    },
    "filters": {
        en: ["All", "S-ATK", "R-ATK", "T-ATK", "PP", "HP", "DEX"],
        jp: ["全", "打撃力", "射撃力", "法撃力", "PP", "HP", "技量"],
        ko: ["모든 스텟", "타격력", "사격력", "법격력", "PP", "HP", "기량"]
    },
    "statsDisplayOrder": {
        en: ["S-ATK", "R-ATK", "T-ATK", "PP", "HP", "DEX", "S-DEF", "R-DEF", "T-DEF"], // Others follow after
        jp: ["打撃力", "射撃力", "法撃力", "PP", "HP", "技量", "打撃防御", "射撃防御", "法撃防御"], // Others follow after,
        ko: ["타격력", "사격력", "법격력", "PP", "HP", "기량", "타격 방어", "사격 방어", "법격 방어"] // Others follow after
    },
    "synonyms": {
        en: {
            "ALL": ["S-ATK", "R-ATK", "T-ATK", "DEX", "S-DEF", "R-DEF", "T-DEF"],
            "All Resist": ["Flame Resist", "Ice Resist", "Lightning Resist", "Wind Resist", "Light Resist", "Dark Resist"]
        },
        jp: {
            "ALL": ["打撃力", "射撃力", "法撃力", "技量", "打撃防御", "射撃防御", "法撃防御"],
            "All Resist": ["炎耐性", "氷耐性", "雷耐性", "風耐性", "光耐性", "闇耐性"]
        },
        ko: {
            "ALL": ["타격력", "사격력", "법격력", "기량", "타격 방어", "사격 방어", "법격 방어"],
            "All Resist": ["염내성", "빙내성", "뇌내성", "풍내성", "광내성", "암내성"]
        }
    },
    "support": {
        "Nothing": {
            en: "Nothing",
            jp: "無し",
            ko: "없음"
        },
        "Ability Success Rate +5%": {
            en: "Ability Success Rate +5%",
            jp: "能力追加成功率+5%",
            ko: "능력 추가 성공률 +5%"
        },
        "Ability Success Rate +10%": {
            en: "Ability Success Rate +10%",
            jp: "能力追加成功率+10%",
            ko: "능력 추가 성공률 +10%"
        },
        "Ability Success Rate +20%": {
            en: "Ability Success Rate +20%",
            jp: "能力追加成功率+20%",
            ko: "능력 추가 성공률 +20%"
        },
        "Ability Success Rate +30%": {
            en: "Ability Success Rate +30%",
            jp: "能力追加成功率+30%",
            ko: "능력 추가 성공률 +30%"
        },
        "Ability Success Rate +40%": {
            en: "Ability Success Rate +40%",
            jp: "能力追加成功率+40%",
            ko: "능력 추가 성공률 +40%"
        },
        "Ability Success Rate +45%": {
            en: "Ability Success Rate +45%",
            jp: "能力追加成功率+45%",
            ko: "능력 추가 성공률 +45%"
        },
        "Ability Success Rate +50%": {
            en: "Ability Success Rate +50%",
            jp: "能力追加成功率+50%",
            ko: "능력 추가 성공률 +50%"
        },
        "Ability Success Rate +55%": {
            en: "Ability Success Rate +55%",
            jp: "能力追加成功率+55%",
            ko: "능력 추가 성공률 +55%"
        },
        "Ability Success Rate +60%": {
            en: "Ability Success Rate +60%",
            jp: "能力追加成功率+60%",
            ko: "능력 추가 성공률 +60%"
        },
        "Ability Success Rate +65%": {
            en: "Ability Success Rate +65%",
            jp: "能力追加成功率+65%",
            ko: "능력 추가 성공률 +65%"
        }
    },
    "additional": {
        "Nothing": {
            en: "Nothing",
            jp: "無し",
            ko: "無し"
        },
        "Add Ability (HP)": {
            en: "Add Ability (HP)",
            jp: "特殊能力追加(HP)",
            ko: "특수 능력 추가(HP)"
        },
        "Add Ability (PP)": {
            en: "Add Ability (PP)",
            jp: "特殊能力追加(PP)",
            ko: "특수 능력 추가(PP)"
        },
        "Add Ability (S-ATK)": {
            en: "Add Ability (S-ATK)",
            jp: "特殊能力追加(打撃)",
            ko: "특수 능력 추가(打撃)"
        },
        "Add Ability (R-ATK)": {
            en: "Add Ability (R-ATK)",
            jp: "特殊能力追加(射撃)",
            ko: "특수 능력 추가(射撃)"
        },
        "Add Ability (T-ATK)": {
            en: "Add Ability (T-ATK)",
            jp: "特殊能力追加(法撃)",
            ko: "특수 능력 추가(法撃)"
        },
        "Add Ability (Tenora)": {
            en: "Add Ability (Tenora)",
            jp: "特殊能力追加(テノラ)",
            ko: "특수 능력 추가(테노라)"
        },
        "Add Ability (GRM)": {
            en: "Add Ability (GRM)",
            jp: "特殊能力追加(GRM)",
            ko: "특수 능력 추가(GRM)"
        },
        "Add Ability (Yohmei)": {
            en: "Add Ability (Yohmei)",
            jp: "特殊能力追加(ヨウメイ)",
            ko: "특수 능력 추가(요우메이)"
        },
        "Add Ability (HP&PP)": {
            en: "Add Ability (HP&PP)",
            jp: "特殊能力追加(HP&PP)",
            ko: "특수 능력 추가(HP&PP)"
        },
        "Add Ability (HP&PP/2)": {
            en: "Add Ability (HP&PP/2)",
            jp: "特殊能力(HP&PP/2)",
            ko: "특수 능력(HP&PP/2)"
        },
        "Add Ability (HP&PP/3)": {
            en: "Add Ability (HP&PP/3)",
            jp: "特殊能力(HP&PP/3)",
            ko: "특수 능력(HP&PP/3)"
        },
        "Add Ability (Grand HP)": {
            en: "Add Ability (Grand HP)",
            jp: "特殊能力(グランドHP)",
            ko: "특수 능력(グランドHP)"
        },
        "Add Ability (S-ATK&PP)": {
            en: "Add Ability (S-ATK&PP)",
            jp: "特殊能力追加(打撃&PP)",
            ko: "특수 능력 추가(打撃&PP)"
        },
        "Add Ability (S-ATK&PP/2)": {
            en: "Add Ability (S-ATK&PP/2)",
            jp: "特殊能力(打撃&PP/2)",
            ko: "특수 능력(打撃&PP/2)"
        },
        "Add Ability (S-ATK&PP/3)": {
            en: "Add Ability (S-ATK&PP/3)",
            jp: "特殊能力(打撃&PP/3)",
            ko: "특수 능력(打撃&PP/3)"
        },
        "Add Ability (Grand P)": {
            en: "Add Ability (Grand P)",
            jp: "特殊能力(グランドP)",
            ko: "특수 능력(グランドP)"
        },
        "Add Ability (R-ATK&PP)": {
            en: "Add Ability (R-ATK&PP)",
            jp: "特殊能力追加(射撃&PP)",
            ko: "특수 능력 추가(射撃&PP)"
        },
        "Add Ability (R-ATK&PP/2)": {
            en: "Add Ability (R-ATK&PP/2)",
            jp: "特殊能力(射撃&PP/2)",
            ko: "특수 능력(射撃&PP/2)"
        },
        "Add Ability (R-ATK&PP/3)": {
            en: "Add Ability (R-ATK&PP/3)",
            jp: "特殊能力(射撃&PP/3)",
            ko: "특수 능력(射撃&PP/3)"
        },
        "Add Ability (Grand S)": {
            en: "Add Ability (Grand S)",
            jp: "特殊能力(グランドS)",
            ko: "특수 능력(グランドS)"
        },
        "Add Ability (T-ATK&PP)": {
            en: "Add Ability (T-ATK&PP)",
            jp: "特殊能力追加(法撃&PP)",
            ko: "특수 능력 추가(法撃&PP)"
        },
        "Add Ability (T-ATK&PP/2)": {
            en: "Add Ability (T-ATK&PP/2)",
            jp: "特殊能力(法撃&PP/2)",
            ko: "특수 능력(法撃&PP/2)"
        },
        "Add Ability (T-ATK&PP/3)": {
            en: "Add Ability (T-ATK&PP/3)",
            jp: "特殊能力(法撃&PP/3)",
            ko: "특수 능력(法撃&PP/3)"
        },
        "Add Ability (Grand T)": {
            en: "Add Ability (Grand T)",
            jp: "特殊能力(グランドT)",
            ko: "특수 능력(グランドT)"
        },
        "Add Ability (Grand PP)": {
            en: "Add Ability (Grand PP)",
            jp: "特殊能力(グランドPP)",
            ko: "특수 능력(グランドPP)"
        },
        "Add Ability (Offense Focus)": {
            en: "Add Ability (Offense Focus)",
            jp: "特殊能力追加(攻撃総合)",
            ko: "특수 능력 추가(攻撃総合)"
        },
        "Add Ability (Offense Focus/2)": {
            en: "Add Ability (Offense Focus/2)",
            jp: "特殊能力追加(攻撃総合/2)",
            ko: "특수 능력 추가(攻撃総合/2)"
        },
        "Add Ability (Defense Focus)": {
            en: "Add Ability (Defense Focus)",
            jp: "特殊能力追加(防御総合)",
            ko: "특수 능력 추가(防御総合)"
        },
        "Add Ability (Defense Focus/2)": {
            en: "Add Ability (Defense Focus/2)",
            jp: "特殊能力追加(防御総合/2)",
            ko: "특수 능력 추가(防御総合/2)"
        },
        "Add Ability (Attack Inherit)": {
            en: "Add Ability (Attack Inherit)",
            jp: "特殊能力追加(攻撃継承)",
            ko: "특수 능력 추가(攻撃継承)"
        },
        "Add Ability (Defense Inherit)": {
            en: "Add Ability (Defense Inherit)",
            jp: "特殊能力追加(防御継承)",
            ko: "특수 능력 추가(防御継承)"
        },
        "Add Ability (Photon Inherit)": {
            en: "Add Ability (Photon Inherit)",
            jp: "特殊能力追加(心身継承)",
            ko: "특수 능력 추가(心身継承)"
        },
        "Add Ability (Mark Receptor)": {
            en: "Add Ability (Mark Receptor)",
            jp: "特殊能力追加(マークレセプター)",
            ko: "특수 능력 추가(마크 리셉터)"
        },
        "Add Ability (Divine Receptor)": {
            en: "Add Ability (Divine Receptor)",
            jp: "特殊能力追加(ディバインレセプター)",
            ko: "특수 능력 추가(디바인 리셉터)"
        },
        "Add Ability (Catalyst Receptor)": {
            en: "Add Ability (Catalyst Receptor)",
            jp: "特殊能力追加(カタリストレセプター)",
            ko: "특수 능력 추가(카탈리스트 리셉터)"
        },
        "Add Ability (Sentence P)": {
            en: "Add Ability (Sentence P)",
            jp: "特殊能力(センテンスP)",
            ko: "특수 능력(센텐스 P)"
        },
        "Add Ability (Sentence S)": {
            en: "Add Ability (Sentence S)",
            jp: "特殊能力(センテンスS)",
            ko: "특수 능력(센텐스 S)"
        },
        "Add Ability (Sentence T)": {
            en: "Add Ability (Sentence T)",
            jp: "特殊能力(センテンスT)",
            ko: "특수 능력(센텐스 T)"
        },
        "Add Ability (Power VI)": {
            en: "Add Ability (Power VI)",
            jp: "特殊能力(パワーⅥ)",
            ko: "특수 능력(파워Ⅵ)"
        },
        "Add Ability (Shoot VI)": {
            en: "Add Ability (Shoot VI)",
            jp: "特殊能力(シュートⅥ)",
            ko: "특수 능력(슛Ⅵ)"
        },
        "Add Ability (Technique VI)": {
            en: "Add Ability (Technique VI)",
            jp: "特殊能力(テクニックⅥ)",
            ko: "특수 능력(테크닉Ⅵ)"
        },
        "Add Ability (Ability IV)": {
            en: "Add Ability (Ability IV)",
            jp: "特殊能力(アビリティ Ⅳ)",
            ko: "특수 능력(어빌리티 Ⅳ)"
        },
        "Add Ability (Mark Joyo)": {
            en: "Add Ability (Mark Joyo)",
            jp: "特殊能力(マーク・ジョイオ)",
            ko: "특수 능력(마크 죠이오)"
        },
        "Add Ability (Mark Couragena)": {
            en: "Add Ability (Mark Couragena)",
            jp: "特殊能力(マーク・カレジナ)",
            ko: "특수 능력(마크 카레지나)"
        },
        "Add Ability (Mark Angar)": {
            en: "Add Ability (Mark Angar)",
            jp: "特殊能力(マーク・アンガル)",
            ko: "특수 능력(마크 앙갈)"
        },
        "Add Ability (Mark Grif)": {
            en: "Add Ability (Mark Grif)",
            jp: "特殊能力(マーク・グリフ)",
            ko: "특수 능력(마크 그리프)"
        },
        "Add Ability (Ether S)": {
            en: "Add Ability (Ether S)",
            jp: "特殊能力(エーテルS)",
            ko: "특수 능력(エーテルS)"
        },
        "S1 Add: Photon Reduction 2": {
            en: "S1 Add: Photon Reduction 2",
            jp: "S1追加:光子縮減2",
            ko: "S1追加:光子縮減2"
        },
        "S1 Add: Brilliant Ruin 2": {
            en: "S1 Add: Brilliant Ruin 2",
            jp: "S1追加:滅域輝与2",
            ko: "S1追加:滅域輝与2"
        },
        "S1 Add: Flowing Intent": {
            en: "S1 Add: Flowing Intent",
            jp: "S1追加:時流の志",
            ko: "S1追加:時流の志"
        },
        "S1 Add: Lethal Intent": {
            en: "S1 Add: Lethal Intent",
            jp: "S1追加:死中の志",
            ko: "S1追加:死中の志"
        },
        "S1 Add: Reckless Strike": {
            en: "S1 Add: Reckless Strike",
            jp: "S1追加:賭死の撃",
            ko: "S1追加:賭死の撃"
        },
        "S1 Add: Eclipsing Decay": {
            en: "S1 Add: Eclipsing Decay",
            jp: "S1追加:失力の蝕",
            ko: "S1追加:失力の蝕"
        },
        "S1 Add: Augment Intent": {
            en: "S1 Add: Augment Intent",
            jp: "S1追加:錬成の志",
            ko: "S1追加:錬成の志"
        },
        "S1 Add: Photon Balance": {
            en: "S1 Add: Photon Balance",
            jp: "S1追加:光子の秤",
            ko: "S1追加:光子の秤"
        },
        "S1 Add: Collaborator Liberator": {
            en: "S1 Add: Collaborator Liberator",
            jp: "S1追加:戦友の加護",
            ko: "S1追加:戦友の加護"
        },
        "S1 Add: Wise Skill": {
            en: "S1 Add: Wise Skill",
            jp: "S1追加:妙技の巧",
            ko: "S1追加:妙技の巧"
        },
        "S1 Add: Radiating Grace": {
            en: "S1 Add: Radiating Grace",
            jp: "S1追加:輝勢の恵",
            ko: "S1追加:輝勢の恵"
        },
        "S1 Add: Skilled Brilliance": {
            en: "S1 Add: Skilled Brilliance",
            jp: "S1追加:輝充の志",
            ko: "S1追加:輝充の志"
        },
        "S1 Add: Red Petal Flash": {
            en: "S1 Add: Red Petal Flash",
            jp: "S1追加:花ノ赤閃",
            ko: "S1追加:花ノ赤閃"
        },
        "S1 Add: Blue Ocean Flash": {
            en: "S1 Add: Blue Ocean Flash",
            jp: "S1追加:海ノ青閃",
            ko: "S1追加:海ノ青閃"
        },
        "S1 Add: White Snow Flash": {
            en: "S1 Add: White Snow Flash",
            jp: "S1追加:雪ノ白閃",
            ko: "S1追加:雪ノ白閃"
        },
        "S1 Add: Yellow Moon Flash": {
            en: "S1 Add: Yellow Moon Flash",
            jp: "S1追加:月ノ黄閃",
            ko: "S1追加:月ノ黄閃"
        },
        "S1 Add: Green Leaf Flash": {
            en: "S1 Add: Green Leaf Flash",
            jp: "S1追加:葉ノ緑閃",
            ko: "S1追加:葉ノ緑閃"
        },
        "S1 Add: Black Shadow Flash": {
            en: "S1 Add: Black Shadow Flash",
            jp: "S1追加:影ノ黒閃",
            ko: "S1追加:影ノ黒閃"
        },
        "S1 Add: Skilled Strike": {
            en: "S1 Add: Skilled Strike",
            jp: "S1追加:妙撃の志",
            ko: "S1追加:妙撃の志"
        },
        "S1 Add: Flowing Exhilaration": {
            en: "S1 Add: Flowing Exhilaration",
            jp: "S1追加:時流活与",
            ko: "S1追加:時流活与"
        },
        "S1 Add: Guardian Armor": {
            en: "S1 Add: Guardian Armor",
            jp: "S1追加:守護の備",
            ko: "S1追加:守護の備"
        },
        "S1 Add: Rupturing Excess": {
            en: "S1 Add: Rupturing Excess",
            jp: "S1追加:裂砕の剰",
            ko: "S1追加:裂砕の剰"
        },
        "S1 Add: Spirited Response": {
            en: "S1 Add: Spirited Response",
            jp: "S1追加:気輝応変",
            ko: "S1追加:気輝応変"
        },
        "S1 Add: Rupturing Intent": {
            en: "S1 Add: Rupturing Intent",
            jp: "S1追加:裂砕の志",
            ko: "S1追加:裂砕の志"
        },
        "S1 Add: Double-Edged Sword": {
            en: "S1 Add: Double-Edged Sword",
            jp: "S1追加:諸刃の撃",
            ko: "S1追加:諸刃の撃"
        },
        "S1 Add: Radiant Strike": {
            en: "S1 Add: Radiant Strike",
            jp: "S1追加:輝剰の撃",
            ko: "S1追加:輝剰の撃"
        },
        "S2 Add: Umbrageous Melody": {
            en: "S2 Add: Umbrageous Melody",
            jp: "S2追加:月葉影の歌",
            ko: "S2追加:月葉影の歌"
        },
        "S2 Add: Nature's Reduction 2": {
            en: "S2 Add: Nature's Reduction 2",
            jp: "S2追加:花海雪の縮減2",
            ko: "S2追加:花海雪の縮減2"
        },
        "S2 Add: Umbrageous Radiance 2": {
            en: "S2 Add: Umbrageous Radiance 2",
            jp: "S2追加:月葉影の輝剰2",
            ko: "S2追加:月葉影の輝剰2"
        },
        "S2 Add: Wise Skill 2": {
            en: "S2 Add: Wise Skill 2",
            jp: "S2追加:妙技の巧2",
            ko: "S2追加:妙技の巧2"
        },
        "S2 Add: Skilled Strike 2": {
            en: "S2 Add: Skilled Strike 2",
            jp: "S2追加:妙撃の志2",
            ko: "S2追加:妙撃の志2"
        },
        "S2 Add: Radiant Strike 2": {
            en: "S2 Add: Radiant Strike 2",
            jp: "S2追加:輝剰の撃2",
            ko: "S2追加:輝剰の撃2"
        },
        "S2 Add: Runner's High": {
            en: "S2 Add: Runner's High",
            jp: "S2追加:走者高揚",
            ko: "S2追加:走者高揚"
        },
        "S2 Add: Skill Reduction": {
            en: "S2 Add: Skill Reduction",
            jp: "S2追加:技巧縮減",
            ko: "S2追加:技巧縮減"
        },
        "S2 Add: Heavenly Keeper": {
            en: "S2 Add: Heavenly Keeper",
            jp: "S2追加:保天輝地",
            ko: "S2追加:保天輝地"
        },
        "S2 Add: Flowing Armor": {
            en: "S2 Add: Flowing Armor",
            jp: "S2追加:時流の護",
            ko: "S2追加:時流の護"
        },
        "S2 Add: Flowing Exhilaration": {
            en: "S2 Add: Flowing Exhilaration",
            jp: "S2追加:時流活与",
            ko: "S2追加:時流活与"
        },
        "S2 Add: Photon Reduction": {
            en: "S2 Add: Photon Reduction",
            jp: "S2追加:光子縮減",
            ko: "S2追加:光子縮減"
        },
        "S2 Add: Sturdy Recovery": {
            en: "S2 Add: Sturdy Recovery",
            jp: "S2追加:剛乱活与",
            ko: "S2追加:剛乱活与"
        },
        "S2 Add: Cursed Radiance": {
            en: "S2 Add: Cursed Radiance",
            jp: "S2追加:災転輝与",
            ko: "S2追加:災転輝与"
        },
        "S2 Add: Flowing Grace": {
            en: "S2 Add: Flowing Grace",
            jp: "S2追加:時流の恵",
            ko: "S2追加:時流の恵"
        },
        "S2 Add: Rupturing Excess": {
            en: "S2 Add: Rupturing Excess",
            jp: "S2追加:裂砕の剰",
            ko: "S2追加:裂砕の剰"
        },
        "S2 Add: Double-Edged Sword": {
            en: "S2 Add: Double-Edged Sword",
            jp: "S2追加:諸刃の撃",
            ko: "S2追加:諸刃の撃"
        },
        "S2 Add: Rainbow's Intent": {
            en: "S2 Add: Rainbow's Intent",
            jp: "S2追加:六色の志",
            ko: "S2追加:六色の志"
        },
        "S2 Add: Rainbow's Exhilaration": {
            en: "S2 Add: Rainbow's Exhilaration",
            jp: "S2追加:六色の活与",
            ko: "S2追加:六色の活与"
        },
        "S2 Add: Skilled Brilliance": {
            en: "S2 Add: Skilled Brilliance",
            jp: "S2追加:輝充の志",
            ko: "S2追加:輝充の志"
        },
        "S3 Add: Nature's Melody": {
            en: "S3 Add: Nature's Melody",
            jp: "S3追加:花海雪の歌",
            ko: "S3追加:花海雪の歌"
        },
        "S3 Add: Nature's Gleam 2": {
            en: "S3 Add: Nature's Gleam 2",
            jp: "S3追加:花海雪の輝勢2",
            ko: "S3追加:花海雪の輝勢2"
        },
        "S3 Add: Flowing Grace": {
            en: "S3 Add: Flowing Grace",
            jp: "S3追加:時流の恵",
            ko: "S3追加:時流の恵"
        },
        "S3 Add: Flowing Exhilaration 2": {
            en: "S3 Add: Flowing Exhilaration 2",
            jp: "S3追加:時流活与2",
            ko: "S3追加:時流活与2"
        },
        "S3 Add: Radiating Grace 2": {
            en: "S3 Add: Radiating Grace 2",
            jp: "S3追加:輝勢の恵2",
            ko: "S3追加:輝勢の恵2"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:撃流の備",
            ko: "S3追加:撃流の備"
        },
        "S3 Add: Curtailed Strike": {
            en: "S3 Add: Curtailed Strike",
            jp: "S3追加:撃流縮減",
            ko: "S3追加:撃流縮減"
        },
        "S3 Add: Wise Strike": {
            en: "S3 Add: Wise Strike",
            jp: "S3追加:撃流の巧",
            ko: "S3追加:撃流の巧"
        },
        "S3 Add: Flowing Courage": {
            en: "S3 Add: Flowing Courage",
            jp: "S3追加:時流の勇",
            ko: "S3追加:時流の勇"
        },
        "S3 Add: Fortifying Strike": {
            en: "S3 Add: Fortifying Strike",
            jp: "S3追加:撃流の備",
            ko: "S3追加:撃流の備"
        },
        "S3 Add: Radiant Strike": {
            en: "S3 Add: Radiant Strike",
            jp: "S3追加:輝剰の撃",
            ko: "S3追加:輝剰の撃"
        },
        "S3 Add: Skilled Strike": {
            en: "S3 Add: Skilled Strike",
            jp: "S3追加:妙撃の志",
            ko: "S3追加:妙撃の志"
        },
        "S3 Add: Offensive Intent": {
            en: "S3 Add: Offensive Intent",
            jp: "S3追加:剛撃の志",
            ko: "S3追加:剛撃の志"
        },
        "S3 Add: Vital Intent": {
            en: "S3 Add: Vital Intent",
            jp: "S3追加:活実の志",
            ko: "S3追加:活実の志"
        },
        "S3 Add: Wise Skill": {
            en: "S3 Add: Wise Skill",
            jp: "S3追加:妙技の巧",
            ko: "S3追加:妙技の巧"
        },
        "S3 Add: Rupturing Intent": {
            en: "S3 Add: Rupturing Intent",
            jp: "S3追加:裂砕の志",
            ko: "S3追加:裂砕の志"
        },
        "S3 Add: Brilliant Ruin": {
            en: "S3 Add: Brilliant Ruin",
            jp: "S3追加:滅域輝与",
            ko: "S3追加:滅域輝与"
        },
        "S3 Add: Cursed Radiance": {
            en: "S3 Add: Cursed Radiance",
            jp: "S3追加:災転輝与",
            ko: "S3追加:災転輝与"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:静心活与",
            ko: "S3追加:静心活与"
        },
        "S3 Add: Powering Intent": {
            en: "S3 Add: Powering Intent",
            jp: "S3追加:強闘の志",
            ko: "S3追加:強闘の志"
        },
        "S3 Add: Rainbow's Reduction": {
            en: "S3 Add: Rainbow's Reduction",
            jp: "S3追加:六色の縮減",
            ko: "S3追加:六色の縮減"
        },
        "S3 Add: Rainbow's Radiance": {
            en: "S3 Add: Rainbow's Radiance",
            jp: "S3追加:六色の輝剰",
            ko: "S3追加:六色の輝剰"
        },
        "S3 Add: Rainbow's Gleam": {
            en: "S3 Add: Rainbow's Gleam",
            jp: "S3追加:六色の輝勢",
            ko: "S3追加:六色の輝勢"
        },
        "S3 Add: Nature's Melody 2": {
            en: "S3 Add: Nature's Melody 2",
            jp: "S3追加:花海雪の歌2",
            ko: "S3追加:花海雪の歌2"
        },
        "S4 Add: Heavenly Protection": {
            en: "S4 Add: Heavenly Protection",
            jp: "S4追加:天輝の守護",
            ko: "S4追加:天輝の守護"
        },
        "S4 Add: Calming Intent": {
            en: "S4 Add: Calming Intent",
            jp: "S4追加:静心の志",
            ko: "S4追加:静心の志"
        },
        "S4 Add: Mysterious Strike": {
            en: "S4 Add: Mysterious Strike",
            jp: "S4追加:妙撃の秤",
            ko: "S4追加:妙撃の秤"
        },
        "S4 Add: Saint Shield": {
            en: "S4 Add: Saint Shield",
            jp: "S4追加:聖者の盾",
            ko: "S4追加:聖者の盾"
        },
        "S4 Add: Harmonized Rainbow": {
            en: "S4 Add: Harmonized Rainbow",
            jp: "S4追加:六色の輝秤",
            ko: "S4追加:六色の輝秤"
        },
        "S4 Add: Raising Pursuit": {
            en: "S4 Add: Raising Pursuit",
            jp: "S4追加:累加追撃",
            ko: "S4追加:累加追撃"
        },
        "S4 Add: Pursuing Eclipse": {
            en: "S4 Add: Pursuing Eclipse",
            jp: "S4追加:追蝕の巧",
            ko: "S4追加:追蝕の巧"
        },
        "S4 Add: Cursed Rainbow": {
            en: "S4 Add: Cursed Rainbow",
            jp: "S4追加:六色の災転",
            ko: "S4追加:六色の災転"
        },
        "S4 Add: Colossal Radiance": {
            en: "S4 Add: Colossal Radiance",
            jp: "S4追加:強闘輝与",
            ko: "S4追加:強闘輝与"
        },
        "S4 Add: Evasion Training": {
            en: "S4 Add: Evasion Training",
            jp: "S4追加:回避訓練",
            ko: "S4追加:回避訓練"
        },
        "S4 Add: Radiant Eclipse": {
            en: "S4 Add: Radiant Eclipse",
            jp: "S4追加:追蝕輝剰",
            ko: "S4追加:追蝕輝剰"
        },
        "S4 Add: Shared Ruin": {
            en: "S4 Add: Shared Ruin",
            jp: "S4追加:滅域分与",
            ko: "S4追加:滅域分与"
        },
        "S5 Add: Anthesis Cultivation": {
            en: "S5 Add: Anthesis Cultivation",
            jp: "S5追加:錬成萌花",
            ko: "S5追加:錬成萌花"
        },
        "S5 Add: Instant Invocation": {
            en: "S5 Add: Instant Invocation",
            jp: "S5追加:瞬術略唱",
            ko: "S5追加:瞬術略唱"
        },
        "S5 Add: Tethered Eclipse": {
            en: "S5 Add: Tethered Eclipse",
            jp: "S5追加:追蝕の縛",
            ko: "S5追加:追蝕の縛"
        },
        "S5 Add: Vigorous Response": {
            en: "S5 Add: Vigorous Response",
            jp: "S5追加:活器応変",
            ko: "S5追加:活器応変"
        },
        "S5 Add: Angelic Respite": {
            en: "S5 Add: Angelic Respite",
            jp: "S5追加:槍機天悠",
            ko: "S5追加:槍機天悠"
        },
        "S6 Add: Ironclad Illness": {
            en: "S6 Add: Ironclad Illness",
            jp: "S6追加:癒蝕頑強",
            ko: "S6追加:癒蝕頑強"
        },
        "S6 Add: Guardian Armor": {
            en: "S6 Add: Guardian Armor",
            jp: "S6追加:守護の備",
            ko: "S6追加:守護の備"
        },
        "S6 Add: Heroic Howl": {
            en: "S6 Add: Heroic Howl",
            jp: "S6追加:英雄咆哮",
            ko: "S6追加:英雄咆哮"
        },
        "S6 Add: Soaring Ballet": {
            en: "S6 Add: Soaring Ballet",
            jp: "S6追加:翔機天舞",
            ko: "S6追加:翔機天舞"
        },
        "S6 Add: Guardian's Essence": {
            en: "S6 Add: Guardian's Essence",
            jp: "S6追加:機魂の守護",
            ko: "S6追加:機魂の守護"
        },
        "S6 Add: Evasion Whistle": {
            en: "S6 Add: Evasion Whistle",
            jp: "S6追加:回避の口笛",
            ko: "S6追加:回避の口笛"
        },
        "S6 Add: Long Night Star": {
            en: "S6 Add: Long Night Star",
            jp: "S6追加:長夜の明星",
            ko: "S6追加:長夜の明星"
        },
        "S6 Add: Overlimit": {
            en: "S6 Add: Overlimit",
            jp: "S6追加:超限活器",
            ko: "S6追加:超限活器"
        },
        "S7 Add: S-ATK Up": {
            en: "S7 Add: S-ATK Up",
            jp: "S7追加:打撃上昇",
            ko: "S7追加:打撃上昇"
        },
        "S7 Add: R-ATK Up": {
            en: "S7 Add: R-ATK Up",
            jp: "S7追加:射撃上昇",
            ko: "S7追加:射撃上昇"
        },
        "S7 Add: T-ATK Up": {
            en: "S7 Add: T-ATK Up",
            jp: "S7追加:法撃上昇",
            ko: "S7追加:法撃上昇"
        },
        "S7 Add: Zenith Impact": {
            en: "S7 Add: Zenith Impact",
            jp: "S7追加:瞬撃の極",
            ko: "S7追加:瞬撃の極"
        },
        "S7 Add: Increased Efficiency": {
            en: "S7 Add: Increased Efficiency",
            jp: "S7追加:薬効増大",
            ko: "S7追加:薬効増大"
        },
        "S7 Add: Mind Merge": {
            en: "S7 Add: Mind Merge",
            jp: "S7追加:以心伝心",
            ko: "S7追加:以心伝心"
        },
        "S7 Add: Sentinel's Gift": {
            en: "S7 Add: Sentinel's Gift",
            jp: "S7追加:法護の与",
            ko: "S7追加:法護の与"
        },
        "S7 Add: Glowing Grace": {
            en: "S7 Add: Glowing Grace",
            jp: "S7追加:輝静の恵",
            ko: "S7追加:輝静の恵"
        },
        "S8 Add: HP Up": {
            en: "S8 Add: HP Up",
            jp: "S8追加:活器上昇",
            ko: "S8追加:活器上昇"
        },
        "S8 Add: PP Up": {
            en: "S8 Add: PP Up",
            jp: "S8追加:輝器上昇",
            ko: "S8追加:輝器上昇"
        },
        "S8 Add: Strong Potency": {
            en: "S8 Add: Strong Potency",
            jp: "S8追加:服薬強身",
            ko: "S8追加:服薬強身"
        },
        "S8 Add: High-Minded": {
            en: "S8 Add: High-Minded",
            jp: "S8追加:一念滞空",
            ko: "S8追加:一念滞空"
        },
        "S8 Add: HP Up 2": {
            en: "S8 Add: HP Up 2",
            jp: "S8追加:活器上昇2",
            ko: "S8追加:活器上昇2"
        },
        "S8 Add: Sky Dance's Boon": {
            en: "S8 Add: Sky Dance's Boon",
            jp: "S8追加:舞空の援",
            ko: "S8追加:舞空の援"
        }
    },
    "potential": {
        "Nothing": {
            en: "Nothing",
            jp: "無し",
            ko: "없음"
        },
        "Guidance of Life Lv1 (+2%)": {
            en: "Guidance of Life Lv1 (+2%)",
            jp: "生命の導きLv1(+2%)",
            ko: "생명의 인도Lv1(+2%)"
        },
        "Guidance of Life Lv2 (+5%)": {
            en: "Guidance of Life Lv2 (+5%)",
            jp: "生命の導きLv2(+5%)",
            ko: "생명의 인도 Lv2(+5%)"
        },
        "Guidance of Life Lv3 (+10%)": {
            en: "Guidance of Life Lv3 (+10%)",
            jp: "生命の導きLv3(+10%)",
            ko: "생명의 인도 Lv3(+10%)"
        }
    },
    "AA01": {
        name_en: "Power I",
        name_jp: "パワーⅠ",
        name_ko: "파워 Ⅰ",
        effect_en: "S-ATK(+10)",
        effect_jp: "打撃力(+10)",
        effect_ko: "타격력(+10)"
    },
    "AA02": {
        name_en: "Power II",
        name_jp: "パワーⅡ",
        name_ko: "파워 Ⅱ",
        effect_en: "S-ATK(+20)",
        effect_jp: "打撃力(+20)",
        effect_ko: "타격력(+20)"
    },
    "AA03": {
        name_en: "Power III",
        name_jp: "パワーⅢ",
        name_ko: "파워 Ⅲ",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_ko: "타격력(+30)"
    },
    "AA04": {
        name_en: "Power IV",
        name_jp: "パワーⅣ",
        name_ko: "파워 Ⅳ",
        effect_en: "S-ATK(+35)",
        effect_jp: "打撃力(+35)",
        effect_ko: "타격력(+35)"
    },
    "AA05": {
        name_en: "Power V",
        name_jp: "パワーⅤ",
        name_ko: "파워 Ⅴ",
        effect_en: "S-ATK(+40)",
        effect_jp: "打撃力(+40)",
        effect_ko: "타격력(+40)"
    },
    "AA06": {
        name_en: "Power VI",
        name_jp: "パワーⅥ",
        name_ko: "파워 Ⅵ",
        effect_en: "S-ATK(+45)",
        effect_jp: "打撃力(+45)",
        effect_ko: "타격력(+45)"
    },
    "AB01": {
        name_en: "Shoot I",
        name_jp: "シュートⅠ",
        name_ko: "슛 Ⅰ",
        effect_en: "R-ATK(+10)",
        effect_jp: "射撃力(+10)",
        effect_ko: "사격력(+10)"
    },
    "AB02": {
        name_en: "Shoot II",
        name_jp: "シュートⅡ",
        name_ko: "슛 Ⅱ",
        effect_en: "R-ATK(+20)",
        effect_jp: "射撃力(+20)",
        effect_ko: "사격력(+20)"
    },
    "AB03": {
        name_en: "Shoot III",
        name_jp: "シュートⅢ",
        name_ko: "슛 Ⅲ",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_ko: "사격력(+30)"
    },
    "AB04": {
        name_en: "Shoot IV",
        name_jp: "シュートⅣ",
        name_ko: "슛 Ⅳ",
        effect_en: "R-ATK(+35)",
        effect_jp: "射撃力(+35)",
        effect_ko: "사격력(+35)"
    },
    "AB05": {
        name_en: "Shoot V",
        name_jp: "シュートⅤ",
        name_ko: "슛 Ⅴ",
        effect_en: "R-ATK(+40)",
        effect_jp: "射撃力(+40)",
        effect_ko: "사격력(+40)"
    },
    "AB06": {
        name_en: "Shoot VI",
        name_jp: "シュートⅥ",
        name_ko: "슛 Ⅵ",
        effect_en: "R-ATK(+45)",
        effect_jp: "射撃力(+45)",
        effect_ko: "사격력(+45)"
    },
    "AC01": {
        name_en: "Technique I",
        name_jp: "テクニックⅠ",
        name_ko: "테크닉 Ⅰ",
        effect_en: "T-ATK(+10)",
        effect_jp: "法撃力(+10)",
        effect_ko: "법격력(+10)"
    },
    "AC02": {
        name_en: "Technique II",
        name_jp: "テクニックⅡ",
        name_ko: "테크닉 Ⅱ",
        effect_en: "T-ATK(+20)",
        effect_jp: "法撃力(+20)",
        effect_ko: "법격력(+20)"
    },
    "AC03": {
        name_en: "Technique III",
        name_jp: "テクニックⅢ",
        name_ko: "테크닉 Ⅲ",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_ko: "법격력(+30)"
    },
    "AC04": {
        name_en: "Technique IV",
        name_jp: "テクニックⅣ",
        name_ko: "테크닉 Ⅳ",
        effect_en: "T-ATK(+35)",
        effect_jp: "法撃力(+35)",
        effect_ko: "법격력(+35)"
    },
    "AC05": {
        name_en: "Technique V",
        name_jp: "テクニックⅤ",
        name_ko: "테크닉 Ⅴ",
        effect_en: "T-ATK(+40)",
        effect_jp: "法撃力(+40)",
        effect_ko: "법격력(+40)"
    },
    "AC06": {
        name_en: "Technique VI",
        name_jp: "テクニックⅥ",
        name_ko: "테크닉 Ⅵ",
        effect_en: "T-ATK(+45)",
        effect_jp: "法撃力(+45)",
        effect_ko: "법격력(+45)"
    },
    "AD01": {
        name_en: "Arm I",
        name_jp: "アームⅠ",
        name_ko: "암 Ⅰ",
        effect_en: "DEX(+10)",
        effect_jp: "技量(+10)",
        effect_ko: "기량(+10)"
    },
    "AD02": {
        name_en: "Arm II",
        name_jp: "アームⅡ",
        name_ko: "암 Ⅱ",
        effect_en: "DEX(+20)",
        effect_jp: "技量(+20)",
        effect_ko: "기량(+20)"
    },
    "AD03": {
        name_en: "Arm III",
        name_jp: "アームⅢ",
        name_ko: "암 Ⅲ",
        effect_en: "DEX(+30)",
        effect_jp: "技量(+30)",
        effect_ko: "기량(+30)"
    },
    "AD04": {
        name_en: "Arm IV",
        name_jp: "アームⅣ",
        name_ko: "암 Ⅳ",
        effect_en: "DEX(+35)",
        effect_jp: "技量(+35)",
        effect_ko: "기량(+35)"
    },
    "AD05": {
        name_en: "Arm V",
        name_jp: "アームⅤ",
        name_ko: "암 Ⅴ",
        effect_en: "DEX(+40)",
        effect_jp: "技量(+40)",
        effect_ko: "기량(+40)"
    },
    "BA01": {
        name_en: "Body I",
        name_jp: "ボディⅠ",
        name_ko: "바디 Ⅰ",
        effect_en: "S-DEF(+10)",
        effect_jp: "打撃防御(+10)",
        effect_ko: "타격 방어(+10)"
    },
    "BA02": {
        name_en: "Body II",
        name_jp: "ボディⅡ",
        name_ko: "바디 Ⅱ",
        effect_en: "S-DEF(+20)",
        effect_jp: "打撃防御(+20)",
        effect_ko: "타격 방어(+20)"
    },
    "BA03": {
        name_en: "Body III",
        name_jp: "ボディⅢ",
        name_ko: "바디 Ⅲ",
        effect_en: "S-DEF(+30)",
        effect_jp: "打撃防御(+30)",
        effect_ko: "타격 방어(+30)"
    },
    "BA04": {
        name_en: "Body IV",
        name_jp: "ボディⅣ",
        name_ko: "바디 Ⅳ",
        effect_en: "S-DEF(+35)",
        effect_jp: "打撃防御(+35)",
        effect_ko: "타격 방어(+35)"
    },
    "BA05": {
        name_en: "Body V",
        name_jp: "ボディⅤ",
        name_ko: "바디 Ⅴ",
        effect_en: "S-DEF(+40)",
        effect_jp: "打撃防御(+40)",
        effect_ko: "타격 방어(+40)"
    },
    "BB01": {
        name_en: "React I",
        name_jp: "リアクトⅠ",
        name_ko: "리액트 Ⅰ",
        effect_en: "R-DEF(+10)",
        effect_jp: "射撃防御(+10)",
        effect_ko: "사격 방어(+10)"
    },
    "BB02": {
        name_en: "React II",
        name_jp: "リアクトⅡ",
        name_ko: "리액트 Ⅱ",
        effect_en: "R-DEF(+20)",
        effect_jp: "射撃防御(+20)",
        effect_ko: "사격 방어(+20)"
    },
    "BB03": {
        name_en: "React III",
        name_jp: "リアクトⅢ",
        name_ko: "리액트 Ⅲ",
        effect_en: "R-DEF(+30)",
        effect_jp: "射撃防御(+30)",
        effect_ko: "사격 방어(+30)"
    },
    "BB04": {
        name_en: "React IV",
        name_jp: "リアクトⅣ",
        name_ko: "리액트 Ⅳ",
        effect_en: "R-DEF(+35)",
        effect_jp: "射撃防御(+35)",
        effect_ko: "사격 방어(+35)"
    },
    "BB05": {
        name_en: "React V",
        name_jp: "リアクトⅤ",
        name_ko: "리액트 Ⅴ",
        effect_en: "R-DEF(+40)",
        effect_jp: "射撃防御(+40)",
        effect_ko: "사격 방어(+40)"
    },
    "BC01": {
        name_en: "Mind I",
        name_jp: "マインドⅠ",
        name_ko: "마인드 Ⅰ",
        effect_en: "T-DEF(+10)",
        effect_jp: "法撃防御(+10)",
        effect_ko: "법격 방어(+10)"
    },
    "BC02": {
        name_en: "Mind II",
        name_jp: "マインドⅡ",
        name_ko: "마인드 Ⅱ",
        effect_en: "T-DEF(+20)",
        effect_jp: "法撃防御(+20)",
        effect_ko: "법격 방어(+20)"
    },
    "BC03": {
        name_en: "Mind III",
        name_jp: "マインドⅢ",
        name_ko: "마인드 Ⅲ",
        effect_en: "T-DEF(+30)",
        effect_jp: "法撃防御(+30)",
        effect_ko: "법격 방어(+30)"
    },
    "BC04": {
        name_en: "Mind IV",
        name_jp: "マインドⅣ",
        name_ko: "마인드 Ⅳ",
        effect_en: "T-DEF(+35)",
        effect_jp: "法撃防御(+35)",
        effect_ko: "법격 방어(+35)"
    },
    "BC05": {
        name_en: "Mind V",
        name_jp: "マインドⅤ",
        name_ko: "마인드 Ⅴ",
        effect_en: "T-DEF(+40)",
        effect_jp: "法撃防御(+40)",
        effect_ko: "법격 방어(+40)"
    },
    "EA01": {
        name_en: "Stamina I",
        name_jp: "スタミナ Ⅰ",
        name_ko: "스태미너 Ⅰ",
        effect_en: "HP(+20)",
        effect_jp: "HP(+20)",
        effect_ko: "HP(+20)"
    },
    "EA02": {
        name_en: "Stamina II",
        name_jp: "スタミナ Ⅱ",
        name_ko: "스태미너 Ⅱ",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_ko: "HP(+40)"
    },
    "EA03": {
        name_en: "Stamina III",
        name_jp: "スタミナ Ⅲ",
        name_ko: "스태미너 Ⅲ",
        effect_en: "HP(+50)",
        effect_jp: "HP(+50)",
        effect_ko: "HP(+50)"
    },
    "EA04": {
        name_en: "Stamina IV",
        name_jp: "スタミナ Ⅳ",
        name_ko: "스태미너 Ⅳ",
        effect_en: "HP(+60)",
        effect_jp: "HP(+60)",
        effect_ko: "HP(+60)"
    },
    "EA05": {
        name_en: "Stamina V",
        name_jp: "スタミナ Ⅴ",
        name_ko: "스태미너 Ⅴ",
        effect_en: "HP(+70)",
        effect_jp: "HP(+70)",
        effect_ko: "HP(+70)"
    },
    "EA06": {
        name_en: "Stamina VI",
        name_jp: "スタミナ Ⅵ",
        name_ko: "스태미너 Ⅵ",
        effect_en: "HP(+70)",
        effect_jp: "HP(+70)",
        effect_ko: "HP(+70)"
    },
    "EB01": {
        name_en: "Spirita I",
        name_jp: "スピリタ Ⅰ",
        name_ko: "스피리타 Ⅰ",
        effect_en: "PP(+2)",
        effect_jp: "PP(+2)",
        effect_ko: "PP(+2)"
    },
    "EB02": {
        name_en: "Spirita II",
        name_jp: "スピリタ Ⅱ",
        name_ko: "스피리타 Ⅱ",
        effect_en: "PP(+3)",
        effect_jp: "PP(+3)",
        effect_ko: "PP(+3)"
    },
    "EB03": {
        name_en: "Spirita III",
        name_jp: "スピリタ Ⅲ",
        name_ko: "스피리타 Ⅲ",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_ko: "PP(+4)"
    },
    "EB04": {
        name_en: "Spirita IV",
        name_jp: "スピリタ Ⅳ",
        name_ko: "스피리타 Ⅳ",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)",
        effect_ko: "PP(+5)"
    },
    "EB05": {
        name_en: "Spirita V",
        name_jp: "スピリタ Ⅴ",
        name_ko: "스피리타 Ⅴ",
        effect_en: "PP(+6)",
        effect_jp: "PP(+6)",
        effect_ko: "PP(+6)"
    },
    "EB06": {
        name_en: "Spirita VI",
        name_jp: "スピリタⅥ",
        name_ko: "스피리타 Ⅵ",
        effect_en: "PP(+7)",
        effect_jp: "PP(+7)",
        effect_ko: "PP(+7)"
    },
    "FA01": {
        name_en: "Ability I",
        name_jp: "アビリティ Ⅰ",
        name_ko: "어빌리티 Ⅰ",
        effect_en: "ALL(+5)",
        effect_jp: "ALL(+5)",
        effect_ko: "ALL(+5)"
    },
    "FA02": {
        name_en: "Ability II",
        name_jp: "アビリティ Ⅱ",
        name_ko: "어빌리티 Ⅱ",
        effect_en: "ALL(+10)",
        effect_jp: "ALL(+10)",
        effect_ko: "ALL(+10)"
    },
    "FA03": {
        name_en: "Ability III",
        name_jp: "アビリティ Ⅲ",
        name_ko: "어빌리티 Ⅲ",
        effect_en: "ALL(+15)",
        effect_jp: "ALL(+15)",
        effect_ko: "ALL(+15)"
    },
    "FA04": {
        name_en: "Ability IV",
        name_jp: "アビリティ Ⅳ",
        name_ko: "어빌리티 Ⅳ",
        effect_en: "ALL(+20)",
        effect_jp: "ALL(+20)",
        effect_ko: "ALL(+20)"
    },
    "FA05": {
        name_en: "Ability V",
        name_jp: "アビリティ Ⅴ",
        name_ko: "어빌리티 Ⅴ",
        effect_en: "ALL(+25)",
        effect_jp: "ALL(+25)",
        effect_ko: "ALL(+25)"
    },
    "HA01": {
        name_en: "Blow Resist I",
        name_jp: "ブロウレジスト Ⅰ",
        name_ko: "블로우 레지스트 Ⅰ",
        effect_en: "Strike Resist(+3)",
        effect_jp: "타격 내성(+3)",
        effect_ko: "타격 내성(+3)"
    },
    "HA02": {
        name_en: "Blow Resist II",
        name_jp: "ブロウレジスト Ⅱ",
        name_ko: "블로우 레지스트 Ⅱ",
        effect_en: "Strike Resist(+4)",
        effect_jp: "타격 내성(+4)",
        effect_ko: "타격 내성(+4)"
    },
    "HA03": {
        name_en: "Blow Resist III",
        name_jp: "ブロウレジスト Ⅲ",
        name_ko: "블로우 레지스트 Ⅲ",
        effect_en: "Strike Resist(+5)",
        effect_jp: "타격 내성(+5)",
        effect_ko: "타격 내성(+5)"
    },
    "HA04": {
        name_en: "Blow Resist IV",
        name_jp: "ブロウレジスト Ⅳ",
        name_ko: "블로우 레지스트 Ⅳ",
        effect_en: "Strike Resist(+6)",
        effect_jp: "타격 내성(+6)",
        effect_ko: "타격 내성(+6)"
    },
    "HA05": {
        name_en: "Blow Resist V",
        name_jp: "ブロウレジスト Ⅴ",
        name_ko: "블로우 레지스트 Ⅴ",
        effect_en: "Strike Resist(+7)",
        effect_jp: "타격 내성(+7)",
        effect_ko: "타격 내성(+7)"
    },
    "HB01": {
        name_en: "Shoot Resist I",
        name_jp: "ショットレジスト Ⅰ",
        name_ko: "샷 레지스트 Ⅰ",
        effect_en: "Range Resist(+3)",
        effect_jp: "사격 내성(+3)",
        effect_ko: "사격 내성(+3)"
    },
    "HB02": {
        name_en: "Shoot Resist II",
        name_jp: "ショットレジスト Ⅱ",
        name_ko: "샷 레지스트 Ⅱ",
        effect_en: "Range Resist(+4)",
        effect_jp: "사격 내성(+4)",
        effect_ko: "사격 내성(+4)"
    },
    "HB03": {
        name_en: "Shoot Resist III",
        name_jp: "ショットレジスト Ⅲ",
        name_ko: "샷 레지스트 Ⅲ",
        effect_en: "Range Resist(+5)",
        effect_jp: "사격 내성(+5)",
        effect_ko: "사격 내성(+5)"
    },
    "HB04": {
        name_en: "Shoot Resist IV",
        name_jp: "ショットレジスト Ⅳ",
        name_ko: "샷 레지스트 Ⅳ",
        effect_en: "Range Resist(+6)",
        effect_jp: "사격 내성(+6)",
        effect_ko: "사격 내성(+6)"
    },
    "HB05": {
        name_en: "Shoot Resist V",
        name_jp: "ショットレジスト Ⅴ",
        name_ko: "샷 레지스트 Ⅴ",
        effect_en: "Range Resist(+7)",
        effect_jp: "사격 내성(+7)",
        effect_ko: "사격 내성(+7)"
    },
    "HC01": {
        name_en: "Mind Resist I",
        name_jp: "マインドレジスト Ⅰ",
        name_ko: "마인드 레지스트 Ⅰ",
        effect_en: "Tech Resist(+3)",
        effect_jp: "법격 내성(+3)",
        effect_ko: "법격 내성(+3)"
    },
    "HC02": {
        name_en: "Mind Resist II",
        name_jp: "マインドレジスト Ⅱ",
        name_ko: "마인드 레지스트 Ⅱ",
        effect_en: "Tech Resist(+4)",
        effect_jp: "법격 내성(+4)",
        effect_ko: "법격 내성(+4)"
    },
    "HC03": {
        name_en: "Mind Resist III",
        name_jp: "マインドレジスト Ⅲ",
        name_ko: "마인드 레지스트 Ⅲ",
        effect_en: "Tech Resist(+5)",
        effect_jp: "법격 내성(+5)",
        effect_ko: "법격 내성(+5)"
    },
    "HC04": {
        name_en: "Mind Resist IV",
        name_jp: "マインドレジスト Ⅳ",
        name_ko: "마인드 레지스트 Ⅳ",
        effect_en: "Tech Resist(+6)",
        effect_jp: "법격 내성(+6)",
        effect_ko: "법격 내성(+6)"
    },
    "HC05": {
        name_en: "Mind Resist V",
        name_jp: "マインドレジスト Ⅴ",
        name_ko: "마인드 레지스트 Ⅴ",
        effect_en: "Tech Resist(+7)",
        effect_jp: "법격 내성(+7)",
        effect_ko: "법격 내성(+7)"
    },
    "HI01": {
        name_en: "Fire Resist I",
        name_jp: "フレイムレジスト Ⅰ",
        name_ko: "플레임 레지스트 Ⅰ",
        effect_en: "Flame Resist(+3)",
        effect_jp: "炎耐性(+3)",
        effect_ko: "염내성(+3)"
    },
    "HI02": {
        name_en: "Fire Resist II",
        name_jp: "フレイムレジスト Ⅱ",
        name_ko: "플레임 레지스트 Ⅱ",
        effect_en: "Flame Resist(+4)",
        effect_jp: "炎耐性(+4)",
        effect_ko: "염내성(+4)"
    },
    "HI03": {
        name_en: "Fire Resist III",
        name_jp: "フレイムレジスト Ⅲ",
        name_ko: "플레임 레지스트 Ⅲ",
        effect_en: "Flame Resist(+5)",
        effect_jp: "炎耐性(+5)",
        effect_ko: "염내성(+5)"
    },
    "HI04": {
        name_en: "Fire Resist IV",
        name_jp: "フレイムレジスト Ⅳ",
        name_ko: "플레임 레지스트 Ⅳ",
        effect_en: "Flame Resist(+6)",
        effect_jp: "炎耐性(+6)",
        effect_ko: "염내성(+6)"
    },
    "HI05": {
        name_en: "Fire Resist V",
        name_jp: "フレイムレジスト Ⅴ",
        name_ko: "플레임 레지스트 Ⅴ",
        effect_en: "Flame Resist(+7)",
        effect_jp: "炎耐性(+7)",
        effect_ko: "염내성(+7)"
    },
    "HJ01": {
        name_en: "Ice Resist I",
        name_jp: "アイスレジスト Ⅰ",
        name_ko: "아이스 레지스트 Ⅰ",
        effect_en: "Ice Resist(+3)",
        effect_jp: "氷耐性(+3)",
        effect_ko: "빙내성(+3)"
    },
    "HJ02": {
        name_en: "Ice Resist II",
        name_jp: "アイスレジスト Ⅱ",
        name_ko: "아이스 레지스트 Ⅱ",
        effect_en: "Ice Resist(+4)",
        effect_jp: "氷耐性(+4)",
        effect_ko: "빙내성(+4)"
    },
    "HJ03": {
        name_en: "Ice Resist III",
        name_jp: "アイスレジスト Ⅲ",
        name_ko: "아이스 레지스트 Ⅲ",
        effect_en: "Ice Resist(+5)",
        effect_jp: "氷耐性(+5)",
        effect_ko: "빙내성(+5)"
    },
    "HJ04": {
        name_en: "Ice Resist IV",
        name_jp: "アイスレジスト Ⅳ",
        name_ko: "아이스 레지스트 Ⅳ",
        effect_en: "Ice Resist(+6)",
        effect_jp: "氷耐性(+6)",
        effect_ko: "빙내성(+6)"
    },
    "HJ05": {
        name_en: "Ice Resist V",
        name_jp: "アイスレジスト Ⅴ",
        name_ko: "아이스 레지스트 Ⅴ",
        effect_en: "Ice Resist(+7)",
        effect_jp: "氷耐性(+7)",
        effect_ko: "빙내성(+7)"
    },
    "HK01": {
        name_en: "Shock Resist I",
        name_jp: "ショックレジスト Ⅰ",
        name_ko: "쇼크 레지스트 Ⅰ",
        effect_en: "Lightning Resist(+3)",
        effect_jp: "雷耐性(+3)",
        effect_ko: "뇌내성(+3)"
    },
    "HK02": {
        name_en: "Shock Resist II",
        name_jp: "ショックレジスト Ⅱ",
        name_ko: "쇼크 레지스트 Ⅱ",
        effect_en: "Lightning Resist(+4)",
        effect_jp: "雷耐性(+4)",
        effect_ko: "뇌내성(+4)"
    },
    "HK03": {
        name_en: "Shock Resist III",
        name_jp: "ショックレジスト Ⅲ",
        name_ko: "쇼크 레지스트 Ⅲ",
        effect_en: "Lightning Resist(+5)",
        effect_jp: "雷耐性(+5)",
        effect_ko: "뇌내성(+5)"
    },
    "HK04": {
        name_en: "Shock Resist IV",
        name_jp: "ショックレジスト Ⅳ",
        name_ko: "쇼크 레지스트 Ⅳ",
        effect_en: "Lightning Resist(+6)",
        effect_jp: "雷耐性(+6)",
        effect_ko: "뇌내성(+6)"
    },
    "HK05": {
        name_en: "Shock Resist V",
        name_jp: "ショックレジスト Ⅴ",
        name_ko: "쇼크 레지스트 Ⅴ",
        effect_en: "Lightning Resist(+7)",
        effect_jp: "雷耐性(+7)",
        effect_ko: "뇌내성(+7)"
    },
    "HL01": {
        name_en: "Wind Resist I",
        name_jp: "ウィンドレジスト Ⅰ",
        name_ko: "윈드 레지스트 Ⅰ",
        effect_en: "Wind Resist(+3)",
        effect_jp: "風耐性(+3)",
        effect_ko: "풍내성(+3)"
    },
    "HL02": {
        name_en: "Wind Resist II",
        name_jp: "ウィンドレジスト Ⅱ",
        name_ko: "윈드 레지스트 Ⅱ",
        effect_en: "Wind Resist(+4)",
        effect_jp: "風耐性(+4)",
        effect_ko: "풍내성(+4)"
    },
    "HL03": {
        name_en: "Wind Resist III",
        name_jp: "ウィンドレジスト Ⅲ",
        name_ko: "윈드 레지스트 Ⅲ",
        effect_en: "Wind Resist(+5)",
        effect_jp: "風耐性(+5)",
        effect_ko: "풍내성(+5)"
    },
    "HL04": {
        name_en: "Wind Resist IV",
        name_jp: "ウィンドレジスト Ⅳ",
        name_ko: "윈드 레지스트 Ⅳ",
        effect_en: "Wind Resist(+6)",
        effect_jp: "風耐性(+6)",
        effect_ko: "풍내성(+6)"
    },
    "HL05": {
        name_en: "Wind Resist V",
        name_jp: "ウィンドレジスト Ⅴ",
        name_ko: "윈드 레지스트 Ⅴ",
        effect_en: "Wind Resist(+7)",
        effect_jp: "風耐性(+7)",
        effect_ko: "풍내성(+7)"
    },
    "HM01": {
        name_en: "Light Resist I",
        name_jp: "ライトレジスト Ⅰ",
        name_ko: "라이트 레지스트 Ⅰ",
        effect_en: "Light Resist(+3)",
        effect_jp: "光耐性(+3)",
        effect_ko: "광내성(+3)"
    },
    "HM02": {
        name_en: "Light Resist II",
        name_jp: "ライトレジスト Ⅱ",
        name_ko: "라이트 레지스트 Ⅱ",
        effect_en: "Light Resist(+4)",
        effect_jp: "光耐性(+4)",
        effect_ko: "광내성(+4)"
    },
    "HM03": {
        name_en: "Light Resist III",
        name_jp: "ライトレジスト Ⅲ",
        name_ko: "라이트 레지스트 Ⅲ",
        effect_en: "Light Resist(+5)",
        effect_jp: "光耐性(+5)",
        effect_ko: "광내성(+5)"
    },
    "HM04": {
        name_en: "Light Resist IV",
        name_jp: "ライトレジスト Ⅳ",
        name_ko: "라이트 레지스트 Ⅳ",
        effect_en: "Light Resist(+6)",
        effect_jp: "光耐性(+6)",
        effect_ko: "광내성(+6)"
    },
    "HM05": {
        name_en: "Light Resist V",
        name_jp: "ライトレジスト Ⅴ",
        name_ko: "라이트 레지스트 Ⅴ",
        effect_en: "Light Resist(+7)",
        effect_jp: "光耐性(+7)",
        effect_ko: "광내성(+7)"
    },
    "HN01": {
        name_en: "Gloom Resist I",
        name_jp: "グルームレジスト Ⅰ",
        name_ko: "그룸 레지스트 Ⅰ",
        effect_en: "Dark Resist(+3)",
        effect_jp: "闇耐性(+3)",
        effect_ko: "암내성(+3)"
    },
    "HN02": {
        name_en: "Gloom Resist II",
        name_jp: "グルームレジスト Ⅱ",
        name_ko: "그룸 레지스트 Ⅱ",
        effect_en: "Dark Resist(+4)",
        effect_jp: "闇耐性(+4)",
        effect_ko: "암내성(+4)"
    },
    "HN03": {
        name_en: "Gloom Resist III",
        name_jp: "グルームレジスト Ⅲ",
        name_ko: "그룸 레지스트 Ⅲ",
        effect_en: "Dark Resist(+5)",
        effect_jp: "闇耐性(+5)",
        effect_ko: "암내성(+5)"
    },
    "HN04": {
        name_en: "Gloom Resist IV",
        name_jp: "グルームレジスト Ⅳ",
        name_ko: "그룸 레지스트 Ⅳ",
        effect_en: "Dark Resist(+6)",
        effect_jp: "闇耐性(+6)",
        effect_ko: "암내성(+6)"
    },
    "HN05": {
        name_en: "Gloom Resist V",
        name_jp: "グルームレジスト Ⅴ",
        name_ko: "그룸 레지스트 Ⅴ",
        effect_en: "Dark Resist(+7)",
        effect_jp: "闇耐性(+7)",
        effect_ko: "암내성(+7)"
    },
    "HZ01": {
        name_en: "All Resist I",
        name_jp: "オールレジスト Ⅰ",
        name_ko: "올 레지스트 Ⅰ",
        effect_en: "All Resist(+1)",
        effect_jp: "全耐性(+1)",
        effect_ko: "모든 내성(+1)"
    },
    "HZ02": {
        name_en: "All Resist II",
        name_jp: "オールレジスト Ⅱ",
        name_ko: "올 레지스트 Ⅱ",
        effect_en: "All Resist(+2)",
        effect_jp: "全耐性(+2)",
        effect_ko: "모든 내성(+2)"
    },
    "HZ03": {
        name_en: "All Resist III",
        name_jp: "オールレジスト Ⅲ",
        name_ko: "올 레지스트 Ⅲ",
        effect_en: "All Resist(+3)",
        effect_jp: "全耐性(+3)",
        effect_ko: "모든 내성(+3)"
    },
    "HZ04": {
        name_en: "All Resist IV",
        name_jp: "オールレジスト Ⅳ",
        name_ko: "올 레지스트 Ⅳ",
        effect_en: "All Resist(+4)",
        effect_jp: "全耐性(+4)",
        effect_ko: "모든 내성(+4)"
    },
    "HZ05": {
        name_en: "All Resist V",
        name_jp: "オールレジスト Ⅴ",
        name_ko: "올 레지스트 Ⅴ",
        effect_en: "All Resist(+5)",
        effect_jp: "全耐性(+5)",
        effect_ko: "모든 내성(+5)"
    },
    "JA01": {
        name_en: "Burn I",
        name_jp: "バーン Ⅰ",
        name_ko: "번 Ⅰ",
        effect_en: "Grants Burn Lv1",
        effect_jp: "バーンLv1付与",
        effect_ko: "번Lv1付与"
    },
    "JA02": {
        name_en: "Burn II",
        name_jp: "バーン Ⅱ",
        name_ko: "번 Ⅱ",
        effect_en: "Grants Burn Lv2",
        effect_jp: "バーンLv2付与",
        effect_ko: "번Lv2付与"
    },
    "JA03": {
        name_en: "Burn III",
        name_jp: "バーン Ⅲ",
        name_ko: "번 Ⅲ",
        effect_en: "Grants Burn Lv3",
        effect_jp: "バーンLv3付与",
        effect_ko: "번Lv3付与"
    },
    "JA04": {
        name_en: "Burn IV",
        name_jp: "バーン Ⅳ",
        name_ko: "번 Ⅳ",
        effect_en: "Grants Burn Lv4",
        effect_jp: "バーンLv4付与",
        effect_ko: "번Lv4付与"
    },
    "JA05": {
        name_en: "Burn V",
        name_jp: "バーン Ⅴ",
        name_ko: "번 Ⅴ",
        effect_en: "Grants Burn Lv5",
        effect_jp: "バーンLv5付与",
        effect_ko: "번Lv5付与"
    },
    "JB01": {
        name_en: "Freeze I",
        name_jp: "フリーズ Ⅰ",
        name_ko: "프리즈 Ⅰ",
        effect_en: "Grants Freeze Lv1",
        effect_jp: "フリーズLv1付与",
        effect_ko: "프리즈Lv1付与"
    },
    "JB02": {
        name_en: "Freeze II",
        name_jp: "フリーズ Ⅱ",
        name_ko: "프리즈 Ⅱ",
        effect_en: "Grants Freeze Lv2",
        effect_jp: "フリーズLv2付与",
        effect_ko: "프리즈Lv2付与"
    },
    "JB03": {
        name_en: "Freeze III",
        name_jp: "フリーズ Ⅲ",
        name_ko: "프리즈 Ⅲ",
        effect_en: "Grants Freeze Lv3",
        effect_jp: "フリーズLv3付与",
        effect_ko: "프리즈Lv3付与"
    },
    "JB04": {
        name_en: "Freeze IV",
        name_jp: "フリーズ Ⅳ",
        name_ko: "프리즈 Ⅳ",
        effect_en: "Grants Freeze Lv4",
        effect_jp: "フリーズLv4付与",
        effect_ko: "프리즈Lv4付与"
    },
    "JB05": {
        name_en: "Freeze V",
        name_jp: "フリーズ Ⅴ",
        name_ko: "프리즈 Ⅴ",
        effect_en: "Grants Freeze Lv5",
        effect_jp: "フリーズLv5付与",
        effect_ko: "프리즈Lv5付与"
    },
    "JC01": {
        name_en: "Shock I",
        name_jp: "ショック Ⅰ",
        name_ko: "쇼크 Ⅰ",
        effect_en: "Grants Shock Lv1",
        effect_jp: "ショックLv1付与",
        effect_ko: "쇼크Lv1付与"
    },
    "JC02": {
        name_en: "Shock II",
        name_jp: "ショック Ⅱ",
        name_ko: "쇼크 Ⅱ",
        effect_en: "Grants Shock Lv2",
        effect_jp: "ショックLv2付与",
        effect_ko: "쇼크Lv2付与"
    },
    "JC03": {
        name_en: "Shock III",
        name_jp: "ショック Ⅲ",
        name_ko: "쇼크 Ⅲ",
        effect_en: "Grants Shock Lv3",
        effect_jp: "ショックLv3付与",
        effect_ko: "쇼크Lv3付与"
    },
    "JC04": {
        name_en: "Shock IV",
        name_jp: "ショック Ⅳ",
        name_ko: "쇼크 Ⅳ",
        effect_en: "Grants Shock Lv4",
        effect_jp: "ショックLv4付与",
        effect_ko: "쇼크Lv4付与"
    },
    "JC05": {
        name_en: "Shock V",
        name_jp: "ショック Ⅴ",
        name_ko: "쇼크 Ⅴ",
        effect_en: "Grants Shock Lv5",
        effect_jp: "ショックLv5付与",
        effect_ko: "쇼크Lv5付与"
    },
    "JD01": {
        name_en: "Mirage I",
        name_jp: "ミラージュ Ⅰ",
        name_ko: "미라쥬 Ⅰ",
        effect_en: "Grants Mirage Lv1",
        effect_jp: "ミラージュLv1付与",
        effect_ko: "미라쥬Lv1付与"
    },
    "JD02": {
        name_en: "Mirage II",
        name_jp: "ミラージュ Ⅱ",
        name_ko: "미라쥬 Ⅱ",
        effect_en: "Grants Mirage Lv2",
        effect_jp: "ミラージュLv2付与",
        effect_ko: "미라쥬Lv2付与"
    },
    "JD03": {
        name_en: "Mirage III",
        name_jp: "ミラージュ Ⅲ",
        name_ko: "미라쥬 Ⅲ",
        effect_en: "Grants Mirage Lv3",
        effect_jp: "ミラージュLv3付与",
        effect_ko: "미라쥬Lv3付与"
    },
    "JD04": {
        name_en: "Mirage IV",
        name_jp: "ミラージュ Ⅳ",
        name_ko: "미라쥬 Ⅳ",
        effect_en: "Grants Mirage Lv4",
        effect_jp: "ミラージュLv4付与",
        effect_ko: "미라쥬Lv4付与"
    },
    "JD05": {
        name_en: "Mirage V",
        name_jp: "ミラージュ Ⅴ",
        name_ko: "미라쥬 Ⅴ",
        effect_en: "Grants Mirage Lv5",
        effect_jp: "ミラージュLv5付与",
        effect_ko: "미라쥬Lv5付与"
    },
    "JE01": {
        name_en: "Panic I",
        name_jp: "パニック Ⅰ",
        name_ko: "패닉 Ⅰ",
        effect_en: "Grants Panic Lv1",
        effect_jp: "パニックLv1付与",
        effect_ko: "패닉Lv1付与"
    },
    "JE02": {
        name_en: "Panic II",
        name_jp: "パニック Ⅱ",
        name_ko: "패닉 Ⅱ",
        effect_en: "Grants Panic Lv2",
        effect_jp: "パニックLv2付与",
        effect_ko: "패닉Lv2付与"
    },
    "JE03": {
        name_en: "Panic III",
        name_jp: "パニック Ⅲ",
        name_ko: "패닉 Ⅲ",
        effect_en: "Grants Panic Lv3",
        effect_jp: "パニックLv3付与",
        effect_ko: "패닉Lv3付与"
    },
    "JE04": {
        name_en: "Panic IV",
        name_jp: "パニック Ⅳ",
        name_ko: "패닉 Ⅳ",
        effect_en: "Grants Panic Lv4",
        effect_jp: "パニックLv4付与",
        effect_ko: "패닉Lv4付与"
    },
    "JE05": {
        name_en: "Panic V",
        name_jp: "パニック Ⅴ",
        name_ko: "패닉 Ⅴ",
        effect_en: "Grants Panic Lv5",
        effect_jp: "パニックLv5付与",
        effect_ko: "패닉Lv5付与"
    },
    "JF01": {
        name_en: "Poison I",
        name_jp: "ポイズン Ⅰ",
        name_ko: "포이즌 Ⅰ",
        effect_en: "Grants Poison Lv1",
        effect_jp: "ポイズンLv1付与",
        effect_ko: "포이즌 Lv.1을 부여한다"
    },
    "JF02": {
        name_en: "Poison II",
        name_jp: "ポイズン Ⅱ",
        name_ko: "포이즌 Ⅱ",
        effect_en: "Grants Poison Lv2",
        effect_jp: "ポイズンLv2付与",
        effect_ko: "포이즌 Lv.2를 부여한다"
    },
    "JF03": {
        name_en: "Poison III",
        name_jp: "ポイズン Ⅲ",
        name_ko: "포이즌 Ⅲ",
        effect_en: "Grants Poison Lv3",
        effect_jp: "ポイズンLv3付与",
        effect_ko: "포이즌 Lv.3을 부여한다"
    },
    "JF04": {
        name_en: "Poison IV",
        name_jp: "ポイズン Ⅳ",
        name_ko: "포이즌 Ⅳ",
        effect_en: "Grants Poison Lv4",
        effect_jp: "ポイズンLv4付与",
        effect_ko: "포이즌 Lv.4를 부여한다"
    },
    "JF05": {
        name_en: "Poison V",
        name_jp: "ポイズン Ⅴ",
        name_ko: "포이즌 Ⅴ",
        effect_en: "Grants Poison Lv5",
        effect_jp: "ポイズンLv5付与",
        effect_ko: "포이즌 Lv.5를 부여한다"
    },
    "LA01": {
        name_en: "S1:Offensive Intent",
        name_jp: "S1:剛撃の志",
        name_ko: "S1 : 강격의 지",
        effect_en: "Boosts damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_ko: "주는 데미지가 2% 상승."
    },
    "LA02": {
        name_en: "S1:Photon Reduction",
        name_jp: "S1:光子縮減",
        name_ko: "S1 : 광자 축감",
        effect_en: "PP consumption is reduced by 7%.",
        effect_jp: "PP消費量を7%軽減。",
        effect_ko: "PP 소비량이 7% 감소."
    },
    "LA03": {
        name_en: "S1:Wise Skill",
        name_jp: "S1:妙技の巧",
        name_ko: "S1 : 묘기의 교",
        effect_en: "Increases critical rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。",
        effect_ko: "크리티컬 확률이 15% 상승한다."
    },
    "LA2S": {
        name_en: "S1:Wise Skill 2",
        name_jp: "S1:妙技の巧2",
        name_ko: "S1:妙技の巧2",
        effect_en: "Increases critical rate by 18%.",
        effect_jp: "クリティカル率が18%上昇する。",
        effect_ko: "크리티컬 확률이 18% 상승한다.。"
    },
    "LA04": {
        name_en: "S1:Skilled Brilliance",
        name_jp: "S1:輝充の志",
        name_ko: "S1:輝充の志",
        effect_en: "Boosts damage by 3% while PP<br>at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。",
        effect_ko: "PP가 40% 이상일 때 주는 데미지가 3% 상승."
    },
    "LA05": {
        name_en: "S1:Double-Edged Sword",
        name_jp: "S1:諸刃の撃",
        name_ko: "S1:諸刃の撃",
        effect_en: "Deal 4% more damage but take<br>8% more damage.",
        effect_jp: "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
        effect_ko: "주는 데미지가 4% 상승하며 발도 시 받는 데미지가 8% 늘어난다."
    },
    "LA06": {
        name_en: "S1:Radiating Grace",
        name_jp: "S1:輝勢の恵",
        name_ko: "S1:輝勢の恵",
        effect_en: "PP regeneration increases by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。",
        effect_ko: "PPの自然回復速度が20%上昇する。"
    },
    "LA2R": {
        name_en: "S1:Radiating Grace 2",
        name_jp: "S1:輝勢の恵2",
        name_ko: "S1:輝勢の恵2",
        effect_en: "PP regeneration increases by 23%.",
        effect_jp: "PPの自然回復速度が23%上昇する。",
        effect_ko: "PPの自然回復速度が23%上昇する。"
    },
    "LA11": {
        name_en: "S1:Immediate Intent",
        name_jp: "S1:瞬連の志",
        name_ko: "S1:瞬連の志",
        effect_en: "Successive Just Attacks will<br>increase damage up to 3%.",
        effect_jp: "連続でジャストアタックに成功すると、最大で3%まで与ダメージが上昇。",
        effect_ko: "連続でジャストアタックに成功すると、最大で3%まで与ダメージが上昇。"
    },
    "LA12": {
        name_en: "S1:Red Petal Flash",
        name_jp: "S1:花ノ赤閃",
        name_ko: "S1:花ノ赤閃",
        effect_en: "+3% Damage for 30 seconds after<br>inflicting 450,000 damage.",
        effect_jp: "与ダメージ450,000毎に30秒間、3%威力上昇。",
        effect_ko: "与ダメージ450,000毎に30秒間、3%威力上昇。"
    },
    "LA13": {
        name_en: "S1:Blue Ocean Flash",
        name_jp: "S1:海ノ青閃",
        name_ko: "S1:海ノ青閃",
        effect_en: "Recover 4% HP every second for 30<br>seconds after taking 600 damage.",
        effect_jp: "被ダメージ600毎に30秒間、毎秒HPが4%回復。",
        effect_ko: "被ダメージ600毎に30秒間、毎秒HPが4%回復。"
    },
    "LA14": {
        name_en: "S1:White Snow Flash",
        name_jp: "S1:雪ノ白閃",
        name_ko: "S1:雪ノ白閃",
        effect_en: "+20% PP Recovery on attacks for 30<br>seconds after using 150 PP.",
        effect_jp: "発動時PP消費量150毎に30秒間、攻撃時のPP回復量が20%上昇。",
        effect_ko: "発動時PP消費量150毎に30秒間、攻撃時のPP回復量が20%上昇。"
    },
    "LA15": {
        name_en: "S1:Yellow Moon Flash",
        name_jp: "S1:月ノ黄閃",
        name_ko: "S1:月ノ黄閃",
        effect_en: "8% PP Consumption Reduction for 20<br>seconds upon Just Guarding.",
        effect_jp: "ジャストガード成功時に20秒間、PP消費量を8%軽減。",
        effect_ko: "ジャストガード成功時に20秒間、PP消費量を8%軽減。"
    },
    "LA16": {
        name_en: "S1:Green Leaf Flash",
        name_jp: "S1:葉ノ緑閃",
        name_ko: "S1:葉ノ緑閃",
        effect_en: "Every 20 seconds, a barrier will<br>turn on/off. The barrier reduces<br>damage by 8% and prevents flinching.",
        effect_jp: "被ダメージを8%軽減し怯まなくなるバリアが20秒間隔で発生・消滅。",
        effect_ko: "被ダメージを8%軽減し怯まなくなるバリアが20秒間隔で発生・消滅。"
    },
    "LA17": {
        name_en: "S1:Black Shadow Flash",
        name_jp: "S1:影ノ黒閃",
        name_ko: "S1:影ノ黒閃",
        effect_en: "Increase Natural PP Recovery for 20<br>seconds after standing still<br>for 5 seconds.",
        effect_jp: "5秒間静止する毎に20秒間、PPの自然回復量が20%上昇。",
        effect_ko: "5秒間静止する毎に20秒間、PPの自然回復量が20%上昇。"
    },
    "LA18": {
        name_en: "S1:Brilliant Ruin",
        name_jp: "S1:滅域輝与",
        name_ko: "S1:滅域輝与",
        effect_en: "Recovery PP upon enemies being defeated near you.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_ko: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LA21": {
        name_en: "S1:Skilled Strike",
        name_jp: "S1:妙撃の志",
        name_ko: "S1:妙撃の志",
        effect_en: "+3% damage on Critical Hits.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。",
        effect_ko: "クリティカル時の与ダメージが3%上昇。"
    },
    "LA22": {
        name_en: "S1:Radiant Strike",
        name_jp: "S1:輝剰の撃",
        name_ko: "S1:輝剰の撃",
        effect_en: "+17% PP Recovery on attacks.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。",
        effect_ko: "攻撃時のPP回復量が17%上昇する。"
    },
    "LA23": {
        name_en: "S1:Flowing Exhilaration",
        name_jp: "S1:時流活与",
        name_ko: "S1:時流活与",
        effect_en: "Recovers 60% HP at set intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。",
        effect_ko: "一定時間ごとにHPを40%回復する。"
    },
    "LA24": {
        name_en: "S1:Guardian Armor",
        name_jp: "S1:守護の備",
        name_ko: "S1:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_ko: "被ダメージを7%軽減。"
    },
    "LA25": {
        name_en: "S1:Vigor Enhancement",
        name_jp: "S1:活剰増進",
        name_ko: "S1:活剰増進",
        effect_en: "Boost self HP recovery by 40%.",
        effect_jp: "自身のHP回復量が40％上昇する",
        effect_ko: "自身のHP回復量が40％上昇する"
    },
    "LA78": {
        name_en: "S1:Violent Invigoration",
        name_jp: "S1:猛威の奮激",
        name_ko: "S1:猛威の奮激",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。",
        effect_ko: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。"
    },
    "LA79": {
        name_en: "S1:Phanatical Advantage",
        name_jp: "S1:狂幻の利",
        name_ko: "S1:狂幻の利",
        effect_en: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        effect_ko: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
    },
    "LA80": {
        name_en: "S1:Powering Intent",
        name_jp: "S1:強闘の志",
        name_ko: "S1:強闘の志",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが4%上昇する。",
        effect_ko: "強敵への与ダメージが4%上昇する。"
    },
    "LA81": {
        name_en: "S1:Rupturing Excess",
        name_jp: "S1:裂砕の剰",
        name_ko: "S1:裂砕の剰",
        effect_en: "Increase PP recovery rate by 40% when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が40%上昇。",
        effect_ko: "破壊可能な部位を攻撃した際、攻撃時PP回復量が40%上昇。"
    },
    "LA82": {
        name_en: "S1:Spirited Response",
        name_jp: "S1:気輝応変",
        name_ko: "S1:気輝応変",
        effect_en: "Increases PP regeneration rate (+80%) while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。",
        effect_ko: "納刀・抜刀を行う事でPP回復速度が変化。"
    },
    "LA83": {
        name_en: "S1:Rupturing Intent",
        name_jp: "S1:裂砕の志",
        name_ko: "S1:裂砕の志",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        effect_ko: "破壊可能な部位を攻撃した際、威力が4%上昇する。"
    },
    "LA84": {
        name_en: "S1:Sturdy Intent",
        name_jp: "S1:依属の志",
        name_ko: "S1:依属の志",
        effect_en: "Increase damage by 4% if your weapon's element or equipped Guard Ring match the enemy's elemental weakness.",
        effect_jp: "ガード系リングまたは武器属性が弱点属性と一致時、4%威力上昇。",
        effect_ko: "ガード系リングまたは武器属性が 속성 약점属性と一致時、4%威力上昇。"
    },
    "LA85": {
        name_en: "S1:Phantasmal Intent",
        name_jp: "S1:幻精の志",
        name_ko: "S1:幻精の志",
        effect_en: "Increase Power based on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて威力が上昇する。",
        effect_ko: "フォトンブラストゲージに応じて威力が上昇する。"
    },
    "LA86": {
        name_en: "S1:Photon Reduction 2",
        name_jp: "S1:光子縮減2",
        name_ko: "S1:光子縮減2",
        effect_en: "Reduce PP consumption by 10%.",
        effect_jp: "PP消費量を10%軽減。",
        effect_ko: "PP消費量を10%軽減。"
    },
    "LA87": {
        name_en: "S1:Brilliant Ruin 2",
        name_jp: "S1:滅域輝与2",
        name_ko: "S1:滅域輝与2",
        effect_en: "Recover PP when an enemy near you is defeated. (+4 PP)",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_ko: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LA88": {
        name_en: "S1:Flowing Intent",
        name_jp: "S1:時流の志",
        name_ko: "S1:時流の志",
        effect_en: "Increase power every second. Maxes at 4% (30s to MAX).",
        effect_jp: "1秒毎に与ダメージが上昇。最大で4%。",
        effect_ko: "1秒毎に与ダメージが上昇。最大で4%。"
    },
    "LA89": {
        name_en: "S1:Lethal Intent",
        name_jp: "S1:死中の志",
        name_ko: "S1:死中の志",
        effect_en: "Reduce HP by 5% every 20 seconds and increase Power by 4%.",
        effect_jp: "20秒毎に最大HPの5%ダメージを負う代わりに威力が4%上昇する。",
        effect_ko: "20秒毎に最大HPの5%ダメージを負う代わりに威力が4%上昇する。"
    },
    "LA90": {
        name_en: "S1:Augment Intent",
        name_jp: "S1:錬成の志",
        name_ko: "S1:錬成の志",
        effect_en: "Increase Power based on the number of Special Abilities attached to this weapon. Maxes at 4%.",
        effect_jp: "特殊能力の付与数に応じて威力上昇。最大で4%。",
        effect_ko: "특수 능력の付与数に応じて威力上昇。最大で4%。"
    },
    "LA91": {
        name_en: "S1:Strike Boost",
        name_jp: "S1:打撃増幅",
        name_ko: "S1:打撃増幅",
        effect_en: "Increase Power by 1% for every 60 S-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 S-ATK is affixed to this weapon.",
        effect_jp: "특수 능력の追加打撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_ko: "특수 능력の追加打撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。"
    },
    "LA92": {
        name_en: "S1:Shoot Boost",
        name_jp: "S1:射撃増幅",
        name_ko: "S1:射撃増幅",
        effect_en: "Increase Power by 1% for every 60 R-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 R-ATK is affixed to this weapon.",
        effect_jp: "특수 능력の追加射撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_ko: "특수 능력の追加射撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。"
    },
    "LA93": {
        name_en: "S1:Tech Boost",
        name_jp: "S1:法撃増幅",
        name_ko: "S1:法撃増幅",
        effect_en: "Increase Power by 1% for every 60 T-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 T-ATK is affixed to this weapon.",
        effect_jp: "특수 능력の追加法撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_ko: "특수 능력の追加法撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。"
    },
    "LA94": {
        name_en: "S1:Reckless Strike",
        name_jp: "S1:賭死の撃",
        name_ko: "S1:賭死の撃",
        effect_en: "Increase Power every three times you are attacked. Upon being attacked a tenth time, release an explosion that incapacitates you and damages all nearby targets.",
        effect_jp: "被ダメージの回数に応じて威力上昇。最大段階時の被ダメージで自身が戦闘不能になり周囲に与ダメージ。",
        effect_ko: "被ダメージの回数に応じて威力上昇。最大段階時の被ダメージで自身が戦闘不能になり周囲に与ダメージ。"
    },
    "LA95": {
        name_en: "S1:Eclipsing Decay",
        name_jp: "S1:失力の蝕",
        name_ko: "S1:失力の蝕",
        effect_en: "Grant a 25% chance to inflict the Jellen status when attacking an enemy.",
        effect_jp: "命中時に25％の確率でジェルンを付与。",
        effect_ko: "命中時に25％の確率でジェルンを付与。"
    },
    "LA2P": {
        name_en: "S1:Photon Balance",
        name_jp: "S1:光子の秤",
        name_ko: "S1:光子の秤",
        effect_en: "Increases PP consumption by 8%, but boosts PA and Tech damage by 4%.",
        effect_jp: "PP消費量が8％増加する代わりにPAとテクニックの威力が4％上昇する。",
        effect_ko: "PP消費量が8％増加する代わりにPAと테크닉の威力が4％上昇する。"
    },
    "LA2Q": {
        name_en: "S1:Collaborator Liberator",
        name_jp: "S1:戦友の加護",
        name_ko: "S1:戦友の加護",
        effect_en: "Reduces PP consumption, boosts critical rate and boosts power based on the number of people in your party (min. 2).",
        effect_jp: "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
        effect_ko: "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。"
    },
    "LB01": {
        name_en: "S2:Sturdy Recovery",
        name_jp: "S2:剛乱活与",
        name_ko: "S2:剛乱活与",
        effect_en: "Gives a fixed chance of<br>restoring HP equal to 1%<br>of damage dealt. (Max: 300)",
        effect_jp: "一定確率で与ダメージの1%をHPとして吸収。(上限300)",
        effect_ko: "一定確率で与ダメージの1%をHPとして吸収。(上限300)"
    },
    "LB02": {
        name_en: "S2:Photon Reduction",
        name_jp: "S2:光子縮減",
        name_ko: "S2:光子縮減",
        effect_en: "PP consumption is reduced by 10%.",
        effect_jp: "PP消費量を10%軽減。",
        effect_ko: "PP消費量を10%軽減。"
    },
    "LB2F": {
        name_en: "S2:Photon Reduction 2",
        name_jp: "S2:光子縮減2",
        name_ko: "S2:光子縮減2",
        effect_en: "PP consumption is reduced by 13%.",
        effect_jp: "PP消費量を13%軽減。",
        effect_ko: "PP消費量を13%軽減。"
    },
    "LB03": {
        name_en: "S2:Wise Skill",
        name_jp: "S2:妙技の巧",
        name_ko: "S2:妙技の巧",
        effect_en: "Increases critical rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。",
        effect_ko: "クリティカル率が12%上昇する。"
    },
    "LB04": {
        name_en: "S2:Radiant Strike",
        name_jp: "S2:輝剰の撃",
        name_ko: "S2:輝剰の撃",
        effect_en: "Increases attack PP recovery by 17%.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。",
        effect_ko: "攻撃時のPP回復量が17%上昇する。"
    },
    "LB05": {
        name_en: "S2:Cursed Radiance",
        name_jp: "S2:災転輝与",
        name_ko: "S2:災転輝与",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。",
        effect_ko: "ダメージを受けた際にPPを15%回復する。"
    },
    "LB06": {
        name_en: "S2:Guardian Armor",
        name_jp: "S2:守護の備",
        name_ko: "S2:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_ko: "被ダメージを7%軽減。"
    },
    "LB07": {
        name_en: "S2:Flowing Exhilaration",
        name_jp: "S2:時流活与",
        name_ko: "S2:時流活与",
        effect_en: "Recover HP by 60% at<br>regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。",
        effect_ko: "一定時間ごとにHPを60%回復する。"
    },
    "LB2G": {
        name_en: "S2:Flowing Exhilaration 2",
        name_jp: "S2:時流活与2",
        name_ko: "S2:時流活与2",
        effect_en: "Recover 75% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを75%回復する。",
        effect_ko: "一定時間ごとにHPを75%回復する。"
    },
    "LB08": {
        name_en: "S2:Immediate Profusion",
        name_jp: "S2:瞬撃繚乱",
        name_ko: "S2:瞬撃繚乱",
        effect_en: "Raises damage by 3% when Just<br>Attacking different PAs or <br>Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        effect_ko: "別のPAや테크닉をジャストアタックすると与ダメージが3%上昇。"
    },
    "LB09": {
        name_en: "S2:Spirited Response",
        name_jp: "S2:気輝応変",
        name_ko: "S2:気輝応変",
        effect_en: "Increases PP regeneration rate<br>while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。",
        effect_ko: "納刀・抜刀を行う事でPP回復速度が変化。"
    },
    "LB0A": {
        name_en: "S2:Flowing Grace",
        name_jp: "S2:時流の恵",
        name_ko: "S2:時流の恵",
        effect_en: "Regenerate 10 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを10回復する。",
        effect_ko: "4秒ごとにPPを10回復する。"
    },
    "LB11": {
        name_en: "S2:Nature's Skill",
        name_jp: "S2:花海雪の巧",
        name_ko: "S2:花海雪の巧",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Red Petal Flash, S1:Blue<br>Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、クリティカル率20%上昇。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、クリティカル率20%上昇。"
    },
    "LB12": {
        name_en: "S2:Nature's Intent",
        name_jp: "S2:花海雪の志",
        name_ko: "S2:花海雪の志",
        effect_en: "Increase damage by 3% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、与ダメージが3%上昇。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、与ダメージが3%上昇。"
    },
    "LB13": {
        name_en: "S2:Nature's Exhilaration",
        name_jp: "S2:花海雪の活与",
        name_ko: "S2:花海雪の活与",
        effect_en: "Recover 2% HP every second when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒HPが2%回復。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒HPが2%回復。"
    },
    "LB14": {
        name_en: "S2:Nature's Reduction",
        name_jp: "S2:花海雪の縮減",
        name_ko: "S2:花海雪の縮減",
        effect_en: "Decrease PP consumption by 12% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を12%軽減。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を12%軽減。"
    },
    "LB15": {
        name_en: "S2:Umbrageous Gleam",
        name_jp: "S2:月葉影の輝勢",
        name_ko: "S2:月葉影の輝勢",
        effect_en: "Increase Natural PP Recovery by 25% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP自然回復量25%上昇。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP自然回復量25%上昇。"
    },
    "LB16": {
        name_en: "S2:Umbrageous Guardian",
        name_jp: "S2:月葉影の備",
        name_ko: "S2:月葉影の備",
        effect_en: "Decrease damage taken by 12% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、被ダメージを12%軽減。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、被ダメージを12%軽減。"
    },
    "LB17": {
        name_en: "S2:Brilliant Ruin",
        name_jp: "S2:滅域輝与",
        name_ko: "S2:滅域輝与",
        effect_en: "Recover PP when an enemy near you<br>is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_ko: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LB18": {
        name_en: "S2:Radiating Grace",
        name_jp: "S2:輝勢の恵",
        name_ko: "S2:輝勢の恵",
        effect_en: "Increases Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。",
        effect_ko: "PPの自然回復速度が17%上昇する。"
    },
    "LB19": {
        name_en: "S2:Offensive Intent",
        name_jp: "S2:剛撃の志",
        name_ko: "S2:剛撃の志",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_ko: "与ダメージが2%上昇。"
    },
    "LB1A": {
        name_en: "S2:Skilled Strike",
        name_jp: "S2:妙撃の志",
        name_ko: "S2:妙撃の志",
        effect_en: "Increase Critical Hit Damage by 3%.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。",
        effect_ko: "クリティカル時の与ダメージが3%上昇。"
    },
    "LB1B": {
        name_en: "S2:Rupturing Intent",
        name_jp: "S2:裂砕の志",
        name_ko: "S2:裂砕の志",
        effect_en: "Increase damage against breakable parts by 3%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が3%上昇する。",
        effect_ko: "破壊可能な部位を攻撃した際、威力が3%上昇する。"
    },
    "LB1C": {
        name_en: "S2:Rupturing Excess",
        name_jp: "S2:裂砕の剰",
        name_ko: "S2:裂砕の剰",
        effect_en: "Increase PP recovery rate by 35%<br>when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が35%上昇。",
        effect_ko: "破壊可能な部位を攻撃した際、攻撃時PP回復量が35%上昇。"
    },
    "LB1D": {
        name_en: "S2:Double-Edged Sword",
        name_jp: "S2:諸刃の撃",
        name_ko: "S2:諸刃の撃",
        effect_en: "Increase Power by 3%<br>but take 6% more damage<br>when weapon is drawn.",
        effect_jp: "与ダメージが3%上昇し、抜刀時のみ被ダメージが6%増える。",
        effect_ko: "与ダメージが3%上昇し、抜刀時のみ被ダメージが6%増える。"
    },
    "LB1E": {
        name_en: "S2:Powering Intent",
        name_jp: "S2:強闘の志",
        name_ko: "S2:強闘の志",
        effect_en: "Increase damage dealt to bosses by 3%.",
        effect_jp: "強敵への与ダメージが3%上昇する。",
        effect_ko: "強敵への与ダメージが3%上昇する。"
    },
    "LB1F": {
        name_en: "S2:Phantasmal Radiance",
        name_jp: "S2:幻精輝剰",
        name_ko: "S2:幻精輝剰",
        effect_en: "Increase Active PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて攻撃時PP回復量が上昇する。",
        effect_ko: "フォトンブラストゲージに応じて攻撃時PP回復量が上昇する。"
    },
    "LB1G": {
        name_en: "S2:Phantasmal Gleam",
        name_jp: "S2:幻精輝勢",
        name_ko: "S2:幻精輝勢",
        effect_en: "Increase Natural PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じてPP自然回復量が上昇する。",
        effect_ko: "フォトンブラストゲージに応じてPP自然回復量が上昇する。"
    },
    "LB1H": {
        name_en: "S2:Phantasmal Guardian",
        name_jp: "S2:幻精の備",
        name_ko: "S2:幻精の備",
        effect_en: "Reduce damage taken based<br>on the Photon Blast Guage.",
        effect_jp: "フォトンブラストゲージに応じて被ダメージ量が減少する。",
        effect_ko: "フォトンブラストゲージに応じて被ダメージ量が減少する。"
    },
    "LB1I": {
        name_en: "S2:Phanatical Advantage",
        name_jp: "S2:狂幻の利",
        name_ko: "S2:狂幻の利",
        effect_en: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        effect_ko: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
    },
    "LB1J": {
        name_en: "S2:Violent Invigoration",
        name_jp: "S2:猛威の奮激",
        name_ko: "S2:猛威の奮激",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。",
        effect_ko: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。"
    },
    "LB1K": {
        name_en: "S2:Umbrageous Melody",
        name_jp: "S2:月葉影の歌",
        name_ko: "S2:月葉影の歌",
        effect_en: "Increase power over time when<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.<br>Maxes at 5%",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で5%。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で5%。"
    },
    "LB1L": {
        name_en: "S2:Nature's Reduction 2",
        name_jp: "S2:花海雪の縮減2",
        name_ko: "S2:花海雪の縮減2",
        effect_en: "Reduce PP consumption by 14%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を14%軽減。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を14%軽減。"
    },
    "LB1R": {
        name_en: "S2:Umbrageous Radiance",
        name_jp: "S2:月葉影の輝剰",
        name_ko: "S2:月葉影の輝剰",
        effect_en: "Increase Active PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が25%上昇。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が25%上昇。"
    },
    "LB1M": {
        name_en: "S2:Umbrageous Radiance 2",
        name_jp: "S2:月葉影の輝剰2",
        name_ko: "S2:月葉影の輝剰2",
        effect_en: "Increase Active PP Recovery by 28%<br>when S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が28%上昇。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が28%上昇。"
    },
    "LB1N": {
        name_en: "S2:Wise Skill 2",
        name_jp: "S2:妙技の巧2",
        name_ko: "S2:妙技の巧2",
        effect_en: "Increase Critical Hit Rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。",
        effect_ko: "クリティカル率が15%上昇する。"
    },
    "LB1O": {
        name_en: "S2:Skilled Strike 2",
        name_jp: "S2:妙撃の志2",
        name_ko: "S2:妙撃の志2",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。",
        effect_ko: "クリティカル時の与ダメージが4%上昇。"
    },
    "LB1P": {
        name_en: "S2:Radiant Strike 2",
        name_jp: "S2:輝剰の撃2",
        name_ko: "S2:輝剰の撃2",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。",
        effect_ko: "攻撃時のPP回復量が20%上昇する。"
    },
    "LB1Q": {
        name_en: "S2:Medicinal Wisdom",
        name_jp: "S2:服薬の恵",
        name_ko: "S2:服薬の恵",
        effect_en: "Boost PP recovery when a -mate item is used.<br>Effects varies per mate.",
        effect_jp: "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
        effect_ko: "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。"
    },
    "LB89": {
        name_en: "S2:Instant Reduction",
        name_jp: "S2:瞬乱縮減",
        name_ko: "S2:瞬乱縮減",
        effect_en: "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックするとPP消費量を12%軽減。",
        effect_ko: "別のPAや테크닉をジャストアタックするとPP消費量を12%軽減。"
    },
    "LB90": {
        name_en: "S2:Flaming Guard",
        name_jp: "S2:火炎の備志",
        name_ko: "S2:火炎の備志",
        effect_en: "Increase Fire Attribute and Burn Resistance. Increase damage against enemies weak to Fire.",
        effect_jp: "炎属性、バーン耐性が上昇。敵の弱点属性が炎属性の時、威力上昇",
        effect_ko: "炎属性、번耐性が上昇。敵の 속성 약점属性が炎属性の時、威力上昇"
    },
    "LB91": {
        name_en: "S2:Freezing Guard",
        name_jp: "S2:氷雪の備志",
        name_ko: "S2:氷雪の備志",
        effect_en: "Increase Ice Attribute and Freeze Resistance. Increase damage against enemies weak to Ice.",
        effect_jp: "氷属性、フリーズ耐性が上昇。敵の弱点属性が氷属性の時、威力上昇",
        effect_ko: "氷属性、프리즈耐性が上昇。敵の 속성 약점属性が氷属性の時、威力上昇"
    },
    "LB92": {
        name_en: "S2:Runner's High",
        name_jp: "S2:走者高揚",
        name_ko: "S2:走者高揚",
        effect_en: "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running.",
        effect_jp: "ダッシュ状態時PP自然回復量が100%上昇しHPが5秒ごとに回復。",
        effect_ko: "ダッシュ状態時PP自然回復量が100%上昇しHPが5秒ごとに回復。"
    },
    "LB93": {
        name_en: "S2:Skill Reduction",
        name_jp: "S2:技巧縮減",
        name_ko: "S2:技巧縮減",
        effect_en: "Reduce PP consumption for 30 seconds upon hitting with a PA/Technique. Has a low chance to grant amplified effects. Triggers Recast upon activation.",
        effect_jp: "フォトンアーツまたは테크닉命中後30秒間、PPの消費量を軽減。また、まれに大きく軽減することがある。効果発動後にリキャストが発生。",
        effect_ko: "フォトンアーツまたは테크닉命中後30秒間、PPの消費量を軽減。また、まれに大きく軽減することがある。効果発動後にリキャストが発生。"
    },
    "LB1W": {
        name_en: "S2:Lightning Guard",
        name_jp: "S2:轟雷の備志",
        name_ko: "S2:轟雷の備志",
        effect_en: "Increases your Lightning attribute and Shock resistance. Boosts power against enemies that are weak to Lightning.",
        effect_jp: "雷耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
        effect_ko: "뇌내성、쇼크耐性が上昇。敵の 속성 약점属性が雷属性の時、威力上昇。"
    },
    "LB1Y": {
        name_en: "S2:Storm Guard",
        name_jp: "S2:暴風の備志",
        name_ko: "S2:暴風の備志",
        effect_en: "Increases your Wind attribute and Shock resistance. Boosts power against enemies that are weak to Wind.",
        effect_jp: "風耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
        effect_ko: "풍내성、쇼크耐性が上昇。敵の 속성 약점属性が雷属性の時、威力上昇。"
    },
    "LB1Z": {
        name_en: "S2:Aegis Gift",
        name_jp: "S2:瞬護の与",
        name_ko: "S2:瞬護の与",
        effect_en: "When you Just Guard at less than 25% HP, recovers HP by 50% and PP by 30%.",
        effect_jp: "HPを25％未満にすると、HPが50％、PPが30％回復します。",
        effect_ko: "HPを25％未満にすると、HPが50％、PPが30％回復します。"
    },
    "LB2A": {
        name_en: "S2:Heavenly Keeper",
        name_jp: "S2:保天輝地",
        name_ko: "S2:保天輝地",
        effect_en: "In the air, reduces PP consumption by 8%. On the ground, boosts PP regeneration and attack PP recovery by 20%.",
        effect_jp: "空中時では、PP消費量が8％軽減。地上時では自然PP回復量が20％かつ地上での攻撃時ではPP回復量が20％上昇。",
        effect_ko: "空中時では、PP消費量が8％軽減。地上時では自然PP回復量が20％かつ地上での攻撃時ではPP回復量が20％上昇。"
    },
    "LB2C": {
        name_en: "S2:Flowing Armor",
        name_jp: "S2:時流の護",
        name_ko: "S2:時流の護",
        effect_en: "Automatically casts Deband at regular intervals.",
        effect_jp: "一定間隔で自身にデバンドを発動する。",
        effect_ko: "一定間隔で自身にデバンドを発動する。"
    },
    "LB2D": {
        name_en: "S2:Shining Guard",
        name_jp: "S2:光明の備志",
        name_ko: "S2:光明の備志",
        effect_en: "Increase Light Attribute and Panic Resistance. Increase damage against enemies weak to Light.",
        effect_jp: "光耐性、パニック耐性が上昇。敵の弱点属性が光属性の時、威力上昇。",
        effect_ko: "광내성、패닉耐性が上昇。敵の 속성 약점属性が光属性の時、威力上昇。"
    },
    "LB2E": {
        name_en: "S2:Darkness Guard",
        name_jp: "S2:暗闇の備志",
        name_ko: "S2:暗闇の備志",
        effect_en: "Increases your Dark attribute and Poison resistance. Boosts power against enemies that are weak to Dark.",
        effect_jp: "闇耐性、ポイズン耐性が上昇。敵の弱点属性が闇属性の時、威力上昇。",
        effect_ko: "암내성、포이즌耐性が上昇。敵の 속성 약점属性が闇属性の時、威力上昇。"
    },
    "LB2I": {
        name_en: "S2:Rainbow's Intent",
        name_jp: "S2:六色の志",
        name_ko: "S2:六色の志",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts damage by 5%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中与ダメージが5%上昇。",
        effect_ko: "花・海・葉・月・雪・影のいずれかが発動中与ダメージが5%上昇。"
    },
    "LB2J": {
        name_en: "S2:Rainbow's Exhilaration",
        name_jp: "S2:六色の活与",
        name_ko: "S2:六色の活与",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Recovers 3% of your<br>HP every second.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中毎秒HPが3%回復。",
        effect_ko: "花・海・葉・月・雪・影のいずれかが発動中毎秒HPが3%回復。"
    },
    "LB98": {
        name_en: "S2:Skilled Brilliance",
        name_jp: "S2:輝充の志",
        name_ko: "S2:輝充の志",
        effect_en: "Boosts damage by 3% while PP at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。",
        effect_ko: "PPが40%以上の時、与ダメージが3%上昇。"
    },
    "LC01": {
        name_en: "S3:Offensive Intent",
        name_jp: "S3:剛撃の志",
        name_ko: "S3:剛撃の志",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_ko: "与ダメージが2%上昇。"
    },
    "LC02": {
        name_en: "S3:Vital Intent",
        name_jp: "S3:活実の志",
        name_ko: "S3:活実の志",
        effect_en: "Boosts damage by 3% while HP is 80% or more.",
        effect_jp: "HPが80%以上の時、与ダメージが3%上昇。",
        effect_ko: "HPが80%以上の時、与ダメージが3%上昇。"
    },
    "LC03": {
        name_en: "S3:Radiant Strike",
        name_jp: "S3:輝剰の撃",
        name_ko: "S3:輝剰の撃",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。",
        effect_ko: "攻撃時のPP回復量が20%上昇する。"
    },
    "LC1P": {
        name_en: "S3:Radiant Strike 2",
        name_jp: "S3:輝剰の撃2",
        name_ko: "S3:輝剰の撃2",
        effect_en: "Increase Attack PP Recovery by 23%.",
        effect_jp: "攻撃時のPP回復量が23%上昇する。",
        effect_ko: "攻撃時のPP回復量が23%上昇する。"
    },
    "LC04": {
        name_en: "S3:Skilled Strike",
        name_jp: "S3:妙撃の志",
        name_ko: "S3:妙撃の志",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。",
        effect_ko: "クリティカル時の与ダメージが4%上昇。"
    },
    "LC1O": {
        name_en: "S3:Skilled Strike 2",
        name_jp: "S3:妙撃の志2",
        name_ko: "S3:妙撃の志2",
        effect_en: "Increase Critical Hit Damage by 5%.",
        effect_jp: "クリティカル時の与ダメージが5%上昇。",
        effect_ko: "クリティカル時の与ダメージが5%上昇。"
    },
    "LC05": {
        name_en: "S3:Radiating Grace",
        name_jp: "S3:輝勢の恵",
        name_ko: "S3:輝勢の恵",
        effect_en: "Increase Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。",
        effect_ko: "PPの自然回復速度が17%上昇する。"
    },
    "LC06": {
        name_en: "S3:Flowing Exhilaration",
        name_jp: "S3:時流活与",
        name_ko: "S3:時流活与",
        effect_en: "Recover 40% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。",
        effect_ko: "一定時間ごとにHPを40%回復する。"
    },
    "LC11": {
        name_en: "S3:Umbrageous Intent",
        name_jp: "S3:月葉影の志",
        name_ko: "S3:月葉影の志",
        effect_en: "Increase damage by 3% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、与ダメージが3%上昇。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、与ダメージが3%上昇。"
    },
    "LC12": {
        name_en: "S3:Umbrageous Reduction",
        name_jp: "S3:月葉影の縮減",
        name_ko: "S3:月葉影の縮減",
        effect_en: "Decrease PP consumption by 14% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP消費量を14%軽減。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP消費量を14%軽減。"
    },
    "LC13": {
        name_en: "S3:Umbrageous Exhilaration",
        name_jp: "S3:月葉影の活与",
        name_ko: "S3:月葉影の活与",
        effect_en: "Recover 2% HP every second when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒HPが2%回復。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒HPが2%回復。"
    },
    "LC14": {
        name_en: "S3:Nature's Radiance",
        name_jp: "S3:花海雪の輝剰",
        name_ko: "S3:花海雪の輝剰",
        effect_en: "Increase Natural PP Recovery by 28% when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、攻撃時PP回復量が28%上昇。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、攻撃時PP回復量が28%上昇。"
    },
    "LC15": {
        name_en: "S3:Wise Skill",
        name_jp: "S3:妙技の巧",
        name_ko: "S3:妙技の巧",
        effect_en: "Increase Critical Hit Rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。",
        effect_ko: "クリティカル率が12%上昇する。"
    },
    "LC16": {
        name_en: "S3:Photon Reduction",
        name_jp: "S3:光子縮減",
        name_ko: "S3:光子縮減",
        effect_en: "Reduces PP consumption by 10%.",
        effect_jp: "PP消費量を7%軽減。",
        effect_ko: "PP消費量を7%軽減。"
    },
    "LC17": {
        name_en: "S3:Guardian Armor",
        name_jp: "S3:守護の備",
        name_ko: "S3:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_ko: "被ダメージを7%軽減。"
    },
    "LC18": {
        name_en: "S3:Nature's Guardian",
        name_jp: "S3:花海雪の備",
        name_ko: "S3:花海雪の備",
        effect_en: "Decrease damage taken by 10%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、被ダメージを10%軽減。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、被ダメージを10%軽減。"
    },
    "LC19": {
        name_en: "S3:Umbrageous Skill",
        name_jp: "S3:月葉影の巧",
        name_ko: "S3:月葉影の巧",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or<br>S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、クリティカル率20%上昇。",
        effect_ko: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、クリティカル率20%上昇。"
    },
    "LC1A": {
        name_en: "S3:Brilliant Ruin",
        name_jp: "S3:滅域輝与",
        name_ko: "S3:滅域輝与",
        effect_en: "Recover PP when a enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_ko: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LC1B": {
        name_en: "S3:Cursed Radiance",
        name_jp: "S3:災転輝与",
        name_ko: "S3:災転輝与",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。",
        effect_ko: "ダメージを受けた際にPPを15%回復する。"
    },
    "LC1C": {
        name_en: "S3:Violent Invigoration",
        name_jp: "S3:猛威の奮激",
        name_ko: "S3:猛威の奮激",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。",
        effect_ko: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。"
    },
    "LC1D": {
        name_en: "S3:Phantasmal Reduction",
        name_jp: "S3:幻精縮減",
        name_ko: "S3:幻精縮減",
        effect_en: "Reduce PP consumption based<br>on the Photon Blast Gauge",
        effect_jp: "フォトンブラストゲージに応じてPP消費量が減少する。",
        effect_ko: "フォトンブラストゲージに応じてPP消費量が減少する。"
    },
    "LC1E": {
        name_en: "S3:Phanatical Advantage",
        name_jp: "S3:狂幻の利",
        name_ko: "S3:狂幻の利",
        effect_en: "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        effect_ko: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
    },
    "LC1F": {
        name_en: "S3:Immediate Profusion",
        name_jp: "S3:瞬撃繚乱",
        name_ko: "S3:瞬撃繚乱",
        effect_en: "Raises damage by 3%<br>when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        effect_ko: "別のPAや테크닉をジャストアタックすると与ダメージが3%上昇。"
    },
    "LC1G": {
        name_en: "S3:Nature's Melody",
        name_jp: "S3:花海雪の歌",
        name_ko: "S3:花海雪の歌",
        effect_en: "Increase damage over time when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で5%。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で5%。"
    },
    "LC1H": {
        name_en: "S3:Nature's Gleam 2",
        name_jp: "S3:花海雪の輝勢2",
        name_ko: "S3:花海雪の輝勢2",
        effect_en: "Increase Natural PP Recovery by 25%<br>when S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量25%上昇。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量25%上昇。"
    },
    "LC1I": {
        name_en: "S3:Flowing Grace",
        name_jp: "S3:時流の恵",
        name_ko: "S3:時流の恵",
        effect_en: "Regenerate 7 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを7回復する。",
        effect_ko: "4秒ごとにPPを7回復する。"
    },
    "LC1J": {
        name_en: "S3:Flowing Exhilaration 2",
        name_jp: "S3:時流活与2",
        name_ko: "S3:時流活与2",
        effect_en: "Recover 60% of your maximum HP<br>at regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。",
        effect_ko: "一定時間ごとにHPを60%回復する。"
    },
    "LC1K": {
        name_en: "S3:Radiating Grace 2",
        name_jp: "S3:輝勢の恵2",
        name_ko: "S3:輝勢の恵2",
        effect_en: "Increase Automatic PP Recovery by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。",
        effect_ko: "PPの自然回復速度が20%上昇する。"
    },
    "LC88": {
        name_en: "S3:Rupturing Intent",
        name_jp: "S3:裂砕の志",
        name_ko: "S3:裂砕の志",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        effect_ko: "破壊可能な部位を攻撃した際、威力が4%上昇する。"
    },
    "LC89": {
        name_en: "S3:Nature's Gleam",
        name_jp: "S3:花海雪の輝勢",
        name_ko: "S3:花海雪の輝勢",
        effect_en: "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量23%上昇。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量23%上昇。"
    },
    "LC90": {
        name_en: "S3:Calming Exhilaration",
        name_jp: "S3:静心活与",
        name_ko: "S3:静心活与",
        effect_en: "Recover 70 HP when you hit with a normal attack. Has a cooldown between uses.",
        effect_jp: "通常攻撃が命中した時HPが70回復。発動後リキャスト発生。",
        effect_ko: "通常攻撃が命中した時HPが70回復。発動後リキャスト発生。"
    },
    "LC91": {
        name_en: "S3:Fortifying Strike",
        name_jp: "S3:撃流の備",
        name_ko: "S3:撃流の備",
        effect_en: "Decrease damage taken by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとに被ダメージが1%軽減。（最大15%まで）",
        effect_ko: "与ダメージ300000ごとに被ダメージが1%軽減。（最大15%まで）"
    },
    "LC92": {
        name_en: "S3:Curtailed Strike",
        name_jp: "S3:撃流縮減",
        name_ko: "S3:撃流縮減",
        effect_en: "Decrease PP consumption by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとにPP消費量が1%軽減。（最大15%まで）",
        effect_ko: "与ダメージ300000ごとにPP消費量が1%軽減。（最大15%まで）"
    },
    "LC93": {
        name_en: "S3:Wise Strike",
        name_jp: "S3:撃流の巧",
        name_ko: "S3:撃流の巧",
        effect_en: "Increase Critical Hit Rate by 2% for every 300, 000 damage dealt. Maxes at 30%.",
        effect_jp: "与ダメージ300000ごとにクリティカル率が2%上昇。（最大30%まで）",
        effect_ko: "与ダメージ300000ごとにクリティカル率が2%上昇。（最大30%まで）"
    },
    "LC2B": {
        name_en: "S3:Flowing Courage",
        name_jp: "S3:時流の勇",
        name_ko: "S3:時流の勇",
        effect_en: "Automatically casts Shifta at regular intervals.",
        effect_jp: "一定間隔で自身にシフタを発動する。",
        effect_ko: "一定間隔で自身にシフタを発動する。"
    },
    "LC1S": {
        name_en: "S3:Furious Inspiration",
        name_jp: "S3:猛威の奮激",
        name_ko: "S3:猛威の奮激",
        effect_en: "Boosts power and<br>critical hit rate.<br>Improves PP efficiency.<br>This effect disappears<br>on taking damage, then<br>is restored after a set<br>time.",
        effect_jp: "威力とクリティカル率が上昇。PP効率が向上。被ダメージで消失。一定時間で効果が復活。",
        effect_ko: "威力とクリティカル率が上昇。PP効率が向上。被ダメージで消失。一定時間で効果が復活。"
    },
    "LC1U": {
        name_en: "S3:Nature's Melody 2",
        name_jp: "S3:花海雪の歌2",
        name_ko: "S3:花海雪の歌2",
        effect_en: "While Red Petal Flash,<br>Blue Ocean Flash or<br>White Snow Flash is<br>active:<br>Boosts damage by up<br>to 7% over time.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で7%。",
        effect_ko: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で7%。"
    },
    "LC98": {
        name_en: "S3:Powering Intent",
        name_jp: "S3:強闘の志",
        name_ko: "S3:強闘の志",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが3%上昇する。",
        effect_ko: "強敵への与ダメージが3%上昇する。"
    },
    "LC1V": {
        name_en: "S3:Rainbow's Reduction",
        name_jp: "S3:六色の縮減",
        name_ko: "S3:六色の縮減",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Reduces your PP<br>consumption by 20%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP消費量を20%軽減。",
        effect_ko: "花・海・葉・月・雪・影のいずれかが発動中PP消費量を20%軽減。"
    },
    "LC1W": {
        name_en: "S3:Rainbow's Radiance",
        name_jp: "S3:六色の輝剰",
        name_ko: "S3:六色の輝剰",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts attack PP<br>recovery by 45%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中攻撃時PP回復量が45%上昇。",
        effect_ko: "花・海・葉・月・雪・影のいずれかが発動中攻撃時PP回復量が45%上昇。"
    },
    "LC1X": {
        name_en: "S3:Rainbow's Gleam",
        name_jp: "S3:六色の輝勢",
        name_ko: "S3:六色の輝勢",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts PP regeneration<br>by 40%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP自然回復量40%上昇。",
        effect_ko: "花・海・葉・月・雪・影のいずれかが発動中PP自然回復量40%上昇。"
    },
    "LD07": {
        name_en: "S4:Marvelous Aegis",
        name_jp: "S4:瞬護輝与",
        name_ko: "S4:瞬護輝与",
        effect_en: "Restores PP on a successful Just Guard.",
        effect_jp: "ジャストガード成功時、PPを回復する。",
        effect_ko: "ジャストガード成功時、PPを回復する。"
    },
    "LD08": {
        name_en: "S4:Steel Resolve",
        name_jp: "S4:鋼の決意",
        name_ko: "S4:鋼の決意",
        effect_en: "Survive one fatal hit with 1 HP remaining.",
        effect_jp: "致命傷を受けても一度限りだが必ずHPが1残る。",
        effect_ko: "致命傷を受けても一度限りだが必ずHPが1残る。"
    },
    "LD09": {
        name_en: "S4:Radiant Response",
        name_jp: "S4:輝器応変",
        name_ko: "S4:輝器応変",
        effect_en: "Raises PP efficiency based on maximum PP.",
        effect_jp: "最大PPに応じてPP効率が向上する。",
        effect_ko: "最大PPに応じてPP効率が向上する。"
    },
    "LD0A": {
        name_en: "S4:Opposing Skill",
        name_jp: "S4:正対の巧",
        name_ko: "S4:正対の巧",
        effect_en: "During Brave Stance, frontal critical<br>rate is raised by 30%.",
        effect_jp: "ブレイブスタンス中、正面へのクリティカル率が30%上昇。",
        effect_ko: "ブレイブスタンス中、正面へのクリティカル率が30%上昇。"
    },
    "LD0B": {
        name_en: "S4:Scything Wind",
        name_jp: "S4:鎌風重吹",
        name_ko: "S4:鎌風重吹",
        effect_en: "Extends Kamaitachi duration by 4 seconds.",
        effect_jp: "カマイタチの持続時間が4秒延長される。",
        effect_ko: "カマイタチの持続時間が4秒延長される。"
    },
    "LD0C": {
        name_en: "S4:Cunning Strike",
        name_jp: "S4:賢勇両撃",
        name_ko: "S4:賢勇両撃",
        effect_en: "During Wise Stance, boosts frontal damage by 15%.",
        effect_jp: "ワイズスタンス中、正面からの与ダメージが15%上昇。",
        effect_ko: "ワイズスタンス中、正面からの与ダメージが15%上昇。"
    },
    "LD0D": {
        name_en: "S4:Vampiric Strike",
        name_jp: "S4:奪命の撃",
        name_ko: "S4:奪命の撃",
        effect_en: "Restores HP equal to 1% of damage dealt.<br>(Max: 30)",
        effect_jp: "攻撃時に与ダメージの1%をHPとして吸収。(上限30)",
        effect_ko: "攻撃時に与ダメージの1%をHPとして吸収。(上限30)"
    },
    "LD0E": {
        name_en: "S4:Steadfast Courage",
        name_jp: "S4:静の胆力",
        name_ko: "S4:静の胆力",
        effect_en: "Become immune to knockback by standing still<br>for a certain time.",
        effect_jp: "一定時間、静止状態が続いた時、打ち上げや吹き飛ばしを防ぐ。",
        effect_ko: "一定時間、静止状態が続いた時、打ち上げや吹き飛ばしを防ぐ。"
    },
    "LD0F": {
        name_en: "S4:Lustrous Trap",
        name_jp: "S4:輝剰の罠",
        name_ko: "S4:輝剰の罠",
        effect_en: "Increases PP recovery from Tactics Trap by<br>20%.",
        effect_jp: "タクティクストラップのPP回復量が20%上昇。",
        effect_ko: "タクティクストラップのPP回復量が20%上昇。"
    },
    "LD0G": {
        name_en: "S4:Dynamic Chain",
        name_jp: "S4:鎖動強身",
        name_ko: "S4:鎖動強身",
        effect_en: "Become invincible for 5 seconds when activating<br>Chain Trigger.",
        effect_jp: "チェイントリガー発動時、5秒間無敵になる。",
        effect_ko: "チェイントリガー発動時、5秒間無敵になる。"
    },
    "LD0H": {
        name_en: "S4:Refined Providence",
        name_jp: "S4:摂理洗練",
        name_ko: "S4:摂理洗練",
        effect_en: "Enhances Element Conversion.",
        effect_jp: "エレメントコンバージョンが強化される。",
        effect_ko: "エレメントコンバージョンが強化される。"
    },
    "LD0I": {
        name_en: "S4:Circuit Rotation",
        name_jp: "S4:回路輪転",
        name_ko: "S4:回路輪転",
        effect_en: "Reduces recast time of Photon Flare by 20%.",
        effect_jp: "フォトンフレアのリキャスト時間を20%軽減する。",
        effect_ko: "フォトンフレアのリキャスト時間を20%軽減する。"
    },
    "LD0J": {
        name_en: "S4:Wand Clobber",
        name_jp: "S4:短杖強打",
        name_ko: "S4:短杖強打",
        effect_en: "Enhances Wand's normal attacks.",
        effect_jp: "ウォンドの通常攻撃性能が強化される。",
        effect_ko: "ウォンドの通常攻撃性能が強化される。"
    },
    "LD0K": {
        name_en: "S4:Gear Reduction",
        name_jp: "S4:刃機放縮",
        name_ko: "S4:刃機放縮",
        effect_en: "Decreases rate that Gear gauge empties while<br>Katana Gear is active.",
        effect_jp: "カタナギア解放中、ギアゲージの減少速度が低下する。",
        effect_ko: "カタナギア解放中、ギアゲージの減少速度が低下する。"
    },
    "LD0L": {
        name_en: "S4:Rapid-fire Arrow",
        name_jp: "S4:迅弓の撃",
        name_ko: "S4:迅弓の撃",
        effect_en: "Bullet Bow damage is boosted by 3% during<br>Rapid Shoot.",
        effect_jp: "ラピッドシュート中、バレットボウ装備時に与ダメージが3%上昇。",
        effect_ko: "ラピッド슛中、バレットボウ装備時に与ダメージが3%上昇。"
    },
    "LD0M": {
        name_en: "S4:Support Extension",
        name_jp: "S4:支援限長",
        name_ko: "S4:支援限長",
        effect_en: "Extends the effect of Shifta and Deband to<br>last 120 seconds.",
        effect_jp: "シフタ・デバンドの効果時間上限を120秒に延長する。",
        effect_ko: "シフタ・デバンドの効果時間上限を120秒に延長する。"
    },
    "LD0N": {
        name_en: "S4:Genesis Ring",
        name_jp: "S4:変素応輪",
        name_ko: "S4:変素応輪",
        effect_en: "Changes the weapon's element to match an equipped<br>Guard ring.",
        effect_jp: "装備しているガード系リングに応じて武器属性が変化する。",
        effect_ko: "装備しているガード系リングに応じて武器属性が変化する。"
    },
    "LD0O": {
        name_en: "S4:Heavenly Protection",
        name_jp: "S4:天輝の守護",
        name_ko: "S4:天輝の守護",
        effect_en: "Bestow Natural PP Recovery and<br>increase PP recovery rate while Guarding.",
        effect_jp: "ガード中PPが自然回復しPP回復速度が上昇。",
        effect_ko: "ガード中PPが自然回復しPP回復速度が上昇。"
    },
    "LD0P": {
        name_en: "S4:Calming Intent",
        name_jp: "S4:静心の志",
        name_ko: "S4:静心の志",
        effect_en: "Increase the power of<br>Normal Attacks by 13%.",
        effect_jp: "通常攻撃の威力が13%上昇。",
        effect_ko: "通常攻撃の威力が13%上昇。"
    },
    "LD0Q": {
        name_en: "S4:Mysterious Strike",
        name_jp: "S4:妙撃の秤",
        name_ko: "S4:妙撃の秤",
        effect_en: "Reduce Critical Hit Rate by 50% and<br>increase the power of Critical Hits by 6%.",
        effect_jp: "クリティカル率を50%低下し、クリティカルの威力が6%上昇。",
        effect_ko: "クリティカル率を50%低下し、クリティカルの威力が6%上昇。"
    },
    "LD0R": {
        name_en: "S4:Saint Shield",
        name_jp: "S4:聖者の盾",
        name_ko: "S4:聖者の盾",
        effect_en: "Generates a barrier (-50% Damage Taken,<br>Negate Knockback) at regular intervals",
        effect_jp: "一定間隔で被ダメージを軽減するバリアを展開。",
        effect_ko: "一定間隔で被ダメージを軽減するバリアを展開。"
    },
    "LD0S": {
        name_en: "S4:Harmonized Rainbow",
        name_jp: "S4:六色の輝秤",
        name_ko: "S4:六色の輝秤",
        effect_en: "Decrease Natural PP Recovery but decrease PP consumption when S1:Red Petal / Blue Ocean / White Snow / Yellow Moon / Green Leaf / Black Shadow Flash are active.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中、PP自然回復は減少するがPP消費量は低下する。",
        effect_ko: "花・海・葉・月・雪・影のいずれかが発動中、PP自然回復は減少するがPP消費量は低下する。"
    },
    "LD0T": {
        name_en: "S4:Raising Pursuit",
        name_jp: "S4:累加追撃",
        name_ko: "S4:累加追撃",
        effect_en: "When you hit with a PA/Tech, boosts damage of the next PA/Tech based on the damage you deal in the next 4 seconds.",
        effect_jp: "PA・테크닉の命中後4秒間の与ダメージ量に応じて、次に命中したPA・テクニックに追加ダメージが発生。(上限25万、リキャスト10秒)",
        effect_ko: "PA・테크닉の命中後4秒間の与ダメージ量に応じて、次に命中したPA・테크닉に追加ダメージが発生。(上限25万、リキャスト10秒)"
    },
    "LD0U": {
        name_en: "S4:Pursuing Eclipse",
        name_jp: "S4:追蝕の巧",
        name_ko: "S4:追蝕の巧",
        effect_en: "Boosts critical hit rate by 50% against enemies affected by Jellen, Weak Bullet or a status effect.",
        effect_jp: "状態異常、ジェルン、ウィークバレットが発動中のエネミーへのクリティカル率が50％上昇する。",
        effect_ko: "状態異常、ジェルン、ウィークバレットが発動中のエネミーへのクリティカル率が50％上昇する。"
    },
    "LD0V": {
        name_en: "S4:Cursed Rainbow",
        name_jp: "S4:六色の災転",
        name_ko: "S4:六色の災転",
        effect_en: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Recovers 500 HP each time you take 500 or more damage at once.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中一度に500以上のダメージを受けるとHPが500回復する。",
        effect_ko: "花・海・葉・月・雪・影のいずれかが発動中一度に500以上のダメージを受けるとHPが500回復する。"
    },
    "LD0W": {
        name_en: "S4:Colossal Radiance",
        name_jp: "S4:強闘輝与",
        name_ko: "S4:強闘輝与",
        effect_en: "Recovers 40 PP every 10 seconds when there is a boss nearby.",
        effect_jp: "一定の範囲内に強敵が居る場合10秒ごとにPPが40回復。",
        effect_ko: "一定の範囲内に強敵が居る場合10秒ごとにPPが40回復。"
    },
    "LD0X": {
        name_en: "S4:Evasion Training",
        name_jp: "S4:回避訓練",
        name_ko: "S4:回避訓練",
        effect_en: "Perform an evasive maneuver when the two circles overlap to gain \"Successful Dodge (Counter)\" status.If you do not evade, recover 5% HP.",
        effect_jp: "二つの円が重なる際に回避すると「回避成功」状態となる。回避しなかった場合はHPを５％回復する。",
        effect_ko: "二つの円が重なる際に回避すると「回避成功」状態となる。回避しなかった場合はHPを５％回復する。"
    },
    "LD0Y": {
        name_en: "S4:Radiant Eclipse",
        name_jp: "S4:追蝕輝剰",
        name_ko: "S4:追蝕輝剰",
        effect_en: "Increases active PP recovery by 60% when attacking an enemy affectedw by a Status Effect, Jellen, or Weak Bullet.",
        effect_jp: "状態異常、ジェルン、ウィークバレット効果が発生中のエネミー攻撃時、PP回復量が60%上昇。",
        effect_ko: "状態異常、ジェルン、ウィークバレット効果が発生中のエネミー攻撃時、PP回復量が60%上昇。"
    },
    "LD0Z": {
        name_en: "S4:Shared Ruin",
        name_jp: "S4:滅域分与",
        name_ko: "S4:滅域分与",
        effect_en: "You and your party<br>recover HP and PP<br>when an enemy dies<br>within range.",
        effect_jp: "一定の範囲内でエネミーが死亡した時PTメンバーと自身のHPとPPを回復。",
        effect_ko: "一定の範囲内でエネミーが死亡した時PTメンバーと自身のHPとPPを回復。"
    },
    "LE01": {
        name_en: "S5:Release Parry",
        name_jp: "S5:瞬護解放",
        name_ko: "S5:瞬護解放",
        effect_en: "Performance changes when Just Guarding with a Weapon Action. Sword only.",
        effect_jp: "武器アクションによるジャストガードで性能が変化する。大剣のみ有効。",
        effect_ko: "武器アクションによるジャストガードで性能が変化する。大剣のみ有効。"
    },
    "LE02": {
        name_en: "S5:Unrivaled Parry",
        name_jp: "S5:瞬護無双",
        name_ko: "S5:瞬護無双",
        effect_en: "Consume no Gear for 15s after performing a Just Guard. Increase Power by 2%. Wired Lance only.",
        effect_jp: "ジャストガード成功時15秒間ギア消費なし。威力2%上昇。自在槍限定。",
        effect_ko: "ジャストガード成功時15秒間ギア消費なし。威力2%上昇。自在槍限定。"
    },
    "LE03": {
        name_en: "S5:Rushing Bolt",
        name_jp: "S5:瞬駆突貫",
        name_ko: "S5:瞬駆突貫",
        effect_en: "Inflict damage while running. Unleash a shockwave attack when you stop running. Increase Power by 2%. Partizan only.",
        effect_jp: "ダッシュ状態時接触した敵にダメージ。ダッシュの停止時衝撃波が発生。威力2%上昇。長槍限定。",
        effect_ko: "ダッシュ状態時接触した敵にダメージ。ダッシュの停止時衝撃波が発生。威力2%上昇。長槍限定。"
    },
    "LE04": {
        name_en: "S5:Shining Cyclone",
        name_jp: "S5:輝境の旋",
        name_ko: "S5:輝境の旋",
        effect_en: "PP recovery and consumption changes when your maximum PP falls below 50%. Twin Daggers only.",
        effect_jp: "PP50%を境にPPの消費量と回復速度が変化。双小剣限定。",
        effect_ko: "PP50%を境にPPの消費量と回復速度が変化。双小剣限定。"
    },
    "LE05": {
        name_en: "S5:Evasive Barrage",
        name_jp: "S5:巧避連撃",
        name_ko: "S5:巧避連撃",
        effect_en: "Boost Gear Gauge and unleash a counterattack upon successfully blocking an attack with DS Wind Parrying.Increase Power by 2%. Double Saber only.",
        effect_jp: "DSウィンドパリング成功時、ギアが上昇し強力な連撃で切り刻む。威力上昇2%。両剣限定。",
        effect_ko: "DSウィンドパリング成功時、ギアが上昇し強力な連撃で切り刻む。威力上昇2%。両剣限定。"
    },
    "LE06": {
        name_en: "S5:Evasive Meteor",
        name_jp: "S5:巧避巨拳",
        name_ko: "S5:巧避巨拳",
        effect_en: "Successfully evade an attack with Sway to summon a giant fist. Increase Power by 2%. Knuckles only.",
        effect_jp: "スウェーで回避成功時特大の拳を落とす。威力2%上昇。鋼拳限定。",
        effect_ko: "スウェーで回避成功時特大の拳を落とす。威力2%上昇。鋼拳限定。"
    },
    "LE07": {
        name_en: "S5:Hangeki Edge",
        name_jp: "S5:反撃鋭刃",
        name_ko: "S5:反撃鋭刃",
        effect_en: "Increase the damage of Counter by 15%. Restore Braver Gear Gauge to its maximum value when you successfully perform Katana Counter.Increase Power by 2%. Katana only.",
        effect_jp: "カウンター威力が上昇。ブレイバーでのカウンター成功時ギアが最大まで上昇。威力2%上昇。抜剣限定。",
        effect_ko: "カウンター威力が上昇。ブレイバーでのカウンター成功時ギアが最大まで上昇。威力2%上昇。抜剣限定。"
    },
    "LE08": {
        name_en: "S5:Thundering Pursuit",
        name_jp: "S5:雷光追撃",
        name_ko: "S5:雷光追撃",
        effect_en: "When using a PA, lightning-charged Photon Blades are generated. (Power: ?%). Dual Blades only.",
        effect_jp: "PAを使用すると雷光を纏ったフォトンの追撃が発生。飛翔剣限定。",
        effect_ko: "PAを使用すると雷光を纏ったフォトンの追撃が発生。飛翔剣限定。"
    },
    "LE09": {
        name_en: "S5:Fiery End",
        name_jp: "S5:烈終焉弾",
        name_ko: "S5:烈終焉弾",
        effect_en: "Enhance the performance of End Attract with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Assault Rifle only.",
        effect_jp: "エンドアトラクト強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。長銃限定。",
        effect_ko: "エンドアトラクト強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。長銃限定。"
    },
    "LE0A": {
        name_en: "S5:Fiery Zero",
        name_jp: "S5:烈零射砲",
        name_ko: "S5:烈零射砲",
        effect_en: "Enhance the performance of Zero Distance with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Launcher only.",
        effect_jp: "ゼロディスタンス強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。大砲限定。",
        effect_ko: "ゼロディスタンス強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。大砲限定。"
    },
    "LE0B": {
        name_en: "S5:Bright Escape",
        name_jp: "S5:巧避輝与",
        name_ko: "S5:巧避輝与",
        effect_en: "Successfully evade an attack with Hero Step or Stylish Roll to restore PP. Effect is negated if damage is taken.Twin Machineguns only.",
        effect_jp: "SロールかHrステップで回避成功時PP回復効果。被ダメージで効果消失。双機銃限定。",
        effect_ko: "SロールかHrステップで回避成功時PP回復効果。被ダメージで効果消失。双機銃限定。"
    },
    "LE0C": {
        name_en: "S5:Auxiliary Arrow",
        name_jp: "S5:追射剛矢",
        name_ko: "S5:追射剛矢",
        effect_en: "Produces a Chase Arrow when a PA (except Banish Arrow) hits an enemy. Boosts the power of this ability's Chase Arrow for 15 seconds after successfully dodging an attack with Step.Bullet Bow only.",
        effect_jp: "バニッシュアロウ以外のPA命中時、追撃が発生。ステップ回避成功後にPA命中後15秒間追撃が強化。強弓限定。",
        effect_ko: "バニッシュアロウ以外のPA命中時、追撃が発生。ステップ回避成功後にPA命中後15秒間追撃が強化。強弓限定。"
    },
    "LE0D": {
        name_en: "S5:Calming Bullet",
        name_jp: "S5:静心杖弾",
        name_ko: "S5:静心杖弾",
        effect_en: "Enhance the performance of Normal Attacks and increase the damage of Rod Shoot by 100%. Rod only.",
        effect_jp: "通常攻撃性能が強化されロッドシュートの威力が100%上昇する。長杖限定。",
        effect_ko: "通常攻撃性能が強化されロッド슛の威力が100%上昇する。長杖限定。"
    },
    "LE0E": {
        name_en: "S5:Speedy Support",
        name_jp: "S5:急速補助",
        name_ko: "S5:急速補助",
        effect_en: "Shorten the charge time of Support Techniques. The power of Zondeel is reduced. Talis only.",
        effect_jp: "補助テクニックのチャージ時間を短縮。ゾンディールの威力減少。導具限定。",
        effect_ko: "補助테크닉のチャージ時間を短縮。ゾンディールの威力減少。導具限定。"
    },
    "LE0F": {
        name_en: "S5:Calming Shockwave",
        name_jp: "S5:静心衝杖",
        name_ko: "S5:静心衝杖",
        effect_en: "Generates a wave attack on the third Normal Attack. Increase Power by 2%. Wand only.",
        effect_jp: "通常攻撃の3段目に衝撃波が発生。威力が2%上昇。短杖限定。",
        effect_ko: "通常攻撃の3段目に衝撃波が発生。威力が2%上昇。短杖限定。"
    },
    "LE0G": {
        name_en: "S5:Rhythmic Pursuer",
        name_jp: "S5:追災律動",
        name_ko: "S5:追災律動",
        effect_en: "Boost the potency of Elemental Burst by 30% and automatically activate Elemental Burst when using a Photon Art.Jet Boots only.",
        effect_jp: "エレメンタルバーストの威力が30%上昇しPA派生攻撃時自動的に発動する。魔装脚限定。",
        effect_ko: "エレメンタルバーストの威力が30%上昇しPA派生攻撃時自動的に発動する。魔装脚限定。"
    },
    "LE0H": {
        name_en: "S5:Mysterious Intent",
        name_jp: "S5:妙の巧志",
        name_ko: "S5:妙の巧志",
        effect_en: "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX).",
        effect_jp: "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)",
        effect_ko: "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)"
    },
    "LE0I": {
        name_en: "S5:Anthesis Cultivation",
        name_jp: "S5:錬成萌花",
        name_ko: "S5:錬成萌花",
        effect_en: "Doubles the effects of Special Abilities.",
        effect_jp: "特殊能力のステータス変化を2倍にする。",
        effect_ko: "특수 능력のステータス変化を2倍にする。"
    },
    "LE98": {
        name_en: "S5:Instant Invocation",
        name_jp: "S5:錬成萌花",
        name_ko: "S5:錬成萌花",
        effect_en: "Technique damage is<br>decreased by 40%, but<br>using the same<br>Technique with a JA<br>substantially<br>decreases charge<br>time.",
        effect_jp: "테크닉の与ダメージが常時40%減少するがテクニック使用後に同属性テクニックJAでチャージ時間大幅短縮。",
        effect_ko: "테크닉の与ダメージが常時40%減少するが테크닉使用後に同属性테크닉JAでチャージ時間大幅短縮。"
    },
    "LE0J": {
        name_en: "S5:Vigorous Response",
        name_jp: "S5:錬成萌花",
        name_ko: "S5:錬成萌花",
        effect_en: "Grants a bonus when<br>your max HP is at<br>1000. Gain additional<br>bonuses per 500 max<br>HP over. Maximum<br>bonuses are reached<br>when max HP is at<br>3000.",
        effect_jp: "最大HP1000から追加効果が発動しHPが500増加ごとに追加効果が発生する。追加効果最大値3000",
        effect_ko: "最大HP1000から追加効果が発動しHPが500増加ごとに追加効果が発生する。追加効果最大値3000"
    },
    "LE0K": {
        name_en: "S5:Tethered Eclipse",
        name_jp: "S5:錬成萌花",
        name_ko: "S5:錬成萌花",
        effect_en: "Boosts damage by 3%<br>against enemies<br>inflicted with a<br>status effect. Also<br>gives a chance to<br>inflict Bind by 40%.",
        effect_jp: "状態異常中のエネミーに対して威力が3%上昇し40%の確率でバインド状態にする。",
        effect_ko: "状態異常中のエネミーに対して威力が3%上昇し40%の確率でバインド状態にする。"
    },
    "LE97": {
        name_en: "S5:Angelic Respite",
        name_jp: "S5:槍機天悠",
        name_ko: "S5:槍機天悠",
        effect_en: "At maximum gear, no gear is consumed while airborne. Increase Power by 2%. Partizan only.",
        effect_jp: "ギア最大時、空中ではギアを消費しなくなる。威力2%上昇。長槍限定。",
        effect_ko: "ギア最大時、空中ではギアを消費しなくなる。威力2%上昇。長槍限定。"
    },
    "LF0A": {
        name_en: "S6:Heroic Howl",
        name_jp: "S6:英雄咆哮",
        name_ko: "S6:英雄咆哮",
        effect_en: "Enhances Hero Boost. Increases the rate that Hero Boosts's damage boost increases. No effect if using weapon with \"Heroic Victory\".",
        effect_jp: "ヒーローブースト強化。威力増加速度が上昇。「英雄の凱歌」が優先され併用不可。",
        effect_ko: "ヒーローブースト強化。威力増加速度が上昇。「英雄の凱歌」が優先され併用不可。"
    },
    "LF0B": {
        name_en: "S6:Soaring Ballet",
        name_jp: "S6:翔機天舞",
        name_ko: "S6:翔機天舞",
        effect_en: "Bouncer weapon Gear fills while standing still. No effect if using weapon with \"Angelic Guidance\".",
        effect_jp: "バウンサー武器のギアが滞空状態時に上昇。「聖鳥の導き」が優先され併用不可。",
        effect_ko: "バウンサー武器のギアが滞空状態時に上昇。「聖鳥の導き」が優先され併用不可。"
    },
    "LF0C": {
        name_en: "S6:Guardian's Essence",
        name_jp: "S6:機魂の守護",
        name_ko: "S6:機魂の守護",
        effect_en: "Hunter weapon and Katana Gear fills while Guarding. No effect if using weapon with \"Zephyr's Edge\".",
        effect_jp: "ハンター武器・カタナのギアがガード中に上昇。「風視の太刀」が優先され併用不可。",
        effect_ko: "ハンター武器・カタナのギアがガード中に上昇。「風視の太刀」が優先され併用不可。"
    },
    "LF0D": {
        name_en: "S6:Ironclad Illness",
        name_jp: "S6:癒蝕頑強",
        name_ko: "S6:癒蝕頑強",
        effect_en: "Become massive for 60 seconds after becoming affected by a status.",
        effect_jp: "状態異常になってから60秒間、頑強になる。",
        effect_ko: "状態異常になってから60秒間、頑強になる。"
    },
    "LF0E": {
        name_en: "S6:Wise Skill",
        name_jp: "S6:妙技の巧",
        name_ko: "S6:妙技の巧",
        effect_en: "Increases your critical hit rate by 15%.",
        effect_jp: "クリティカル率が15％上昇する。",
        effect_ko: "クリティカル率が15％上昇する。"
    },
    "LF0F": {
        name_en: "S6:Guardian Armor",
        name_jp: "S6:守護の備",
        name_ko: "S6:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_ko: "被ダメージを7%軽減。"
    },
    "LF0G": {
        name_en: "S6:S-ATK Up",
        name_jp: "S6:打撃上昇",
        name_ko: "S6:打撃上昇",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_ko: "타격력(+30)"
    },
    "LF0H": {
        name_en: "S6:R-ATK Up",
        name_jp: "S6:射撃上昇",
        name_ko: "S6:射撃上昇",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_ko: "사격력(+30)"
    },
    "LF0I": {
        name_en: "S6:T-ATK Up",
        name_jp: "S6:法撃上昇",
        name_ko: "S6:法撃上昇",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_ko: "법격력(+30)"
    },
    "LF0J": {
        name_en: "S6:HP Up",
        name_jp: "S6:活器上昇",
        name_ko: "S6:活器上昇",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_ko: "HP(+40)"
    },
    "LF0K": {
        name_en: "S6:PP Up",
        name_jp: "S6:輝器上昇",
        name_ko: "S6:輝器上昇",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_ko: "PP(+4)"
    },
    "LF0L": {
        name_en: "S6:Brilliant Ruin",
        name_jp: "S6:滅域輝与",
        name_ko: "S6:滅域輝与",
        effect_en: "Recover 5 PP when an enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_ko: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LF0M": {
        name_en: "S6:Readying Guard",
        name_jp: "S6:守護乱備",
        name_ko: "S6:守護乱備",
        effect_en: "Gain a 10% chance to reduce damage by 70%.",
        effect_jp: "10％の確率で被ダメージを70％軽減。",
        effect_ko: "10％の確率で被ダメージを70％軽減。"
    },
    "LF0N": {
        name_en: "S6:Angelic Wings",
        name_jp: "S6:翔天の翼",
        name_ko: "S6:翔天の翼",
        effect_en: "Increases Jump Power.",
        effect_jp: "ジャンプ力が上昇する。",
        effect_ko: "ジャンプ力が上昇する。"
    },
    "LF0O": {
        name_en: "S6:Long Night Star",
        name_jp: "S6:長夜の明星",
        name_ko: "S6:長夜の明星",
        effect_en: "Reduce Etoile Boost's decay per second by 50%.",
        effect_jp: "エトワールブーストの秒間軽減減少率を50％緩和する。",
        effect_ko: "エトワールブーストの秒間軽減減少率を50％緩和する。"
    },
    "LF0P": {
        name_en: "S6:Evasion Whistle",
        name_jp: "S6:回避の口笛",
        name_ko: "S6:回避の口笛",
        effect_en: "Dodging will cause your pet to return back to you.",
        effect_jp: "回避行動に合わせてペットが戻ってくる。",
        effect_ko: "回避行動に合わせてペットが戻ってくる。"
    },
    "LF0Q": {
        name_en: "S6:Battle Readiness",
        name_jp: "S6:修羅の備",
        name_ko: "S6:修羅の備",
        effect_en: "When your HP is at 50% or lower, damage is reduced by 40%. Resets after a brief cooldown.",
        effect_jp: "HPが50％以下の時3秒間、被ダメージを40％軽減する。発動後リキャスト発生。",
        effect_ko: "HPが50％以下の時3秒間、被ダメージを40％軽減する。発動後リキャスト発生。"
    },
    "LF0S": {
        name_en: "S6:Overlimit",
        name_jp: "S6:超限活器",
        name_ko: "S6:超限活器",
        effect_en: "Boosts maximum HP by<br>50% while Limit Break<br>is active.",
        effect_jp: "リミットブレイク発動中最大HPが50%上昇する。",
        effect_ko: "リミットブレイク発動中最大HPが50%上昇する。"
    },
    "LG0A": {
        name_en: "S7:Glowing Grace",
        name_jp: "S7:輝静の恵",
        name_ko: "S7:輝静の恵",
        effect_en: "Recovers 4 PP per second when standing still for longer than 1 second.",
        effect_jp: "1秒間静止状態が続いた時、ppが1秒ごとに4回復。",
        effect_ko: "1秒間静止状態が続いた時、ppが1秒ごとに4回復。"
    },
    "LG0B": {
        name_en: "S7:S-ATK Up",
        name_jp: "S7:打撃上昇",
        name_ko: "S7:打撃上昇",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_ko: "타격력(+30)"
    },
    "LG0C": {
        name_en: "S7:R-ATK Up",
        name_jp: "S7:射撃上昇",
        name_ko: "S7:射撃上昇",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_ko: "사격력(+30)"
    },
    "LG0D": {
        name_en: "S7:T-ATK Up",
        name_jp: "S7:法撃上昇",
        name_ko: "S7:法撃上昇",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_ko: "법격력(+30)"
    },
    "LG0E": {
        name_en: "S7:HP Up",
        name_jp: "S7:活器上昇",
        name_ko: "S7:活器上昇",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_ko: "HP(+40)"
    },
    "LG0F": {
        name_en: "S7:PP Up",
        name_jp: "S7:輝器上昇",
        name_ko: "S7:輝器上昇",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_ko: "PP(+4)"
    },
    "LG0G": {
        name_en: "S7:S-Atk Up 2",
        name_jp: "S7:打撃上昇2",
        name_ko: "S7:打撃上昇2",
        effect_en: "S-ATK(+50)",
        effect_jp: "打撃力(+50)",
        effect_ko: "타격력(+50)"
    },
    "LG0H": {
        name_en: "S7:R-ATK Up 2",
        name_jp: "S7:射撃上昇2",
        name_ko: "S7:射撃上昇2",
        effect_en: "R-ATK(+50)",
        effect_jp: "射撃力(+50)",
        effect_ko: "사격력(+50)"
    },
    "LG0I": {
        name_en: "S7:T-ATK Up 2",
        name_jp: "S7:法撃上昇2",
        name_ko: "S7:法撃上昇2",
        effect_en: "T-ATK(+50)",
        effect_jp: "法撃力(+50)",
        effect_ko: "법격력(+50)"
    },
    "LG0J": {
        name_en: "S7:Attack Up",
        name_jp: "S7:攻撃上昇",
        name_ko: "S7:攻撃上昇",
        effect_en: "S-ATK(+25),R-ATK(+25),T-ATK(+25)",
        effect_jp: "打撃力(+25),射撃力(+25),法撃力(+25)",
        effect_ko: "타격력(+25),사격력(+25),법격력(+25)"
    },
    "LG0K": {
        name_en: "S7:Attack Up 2",
        name_jp: "S7:攻撃上昇2",
        name_ko: "S7:攻撃上昇2",
        effect_en: "S-ATK(+45),R-ATK(+45),T-ATK(+45)",
        effect_jp: "打撃力(+45),射撃力(+45),法撃力(+45)",
        effect_ko: "타격력(+45),사격력(+45),법격력(+45)"
    },
    "LG0L": {
        name_en: "S7:Zenith Impact",
        name_jp: "S7:瞬撃の極",
        name_ko: "S7:瞬撃の極",
        effect_en: "Gain a 10% chance to stun the enemy with a Just Attack.",
        effect_jp: "ジャストアタック時に10%の確率で対象をスタンさせる。",
        effect_ko: "ジャストアタック時に10%の確率で対象をスタンさせる。"
    },
    "LG0M": {
        name_en: "S7:Increased Efficiency",
        name_jp: "S7:薬効増大",
        name_ko: "S7:薬効増大",
        effect_en: "Boost the effect of recovery items by 30%.",
        effect_jp: "回復アイテムの効果を30％上昇させる。",
        effect_ko: "回復アイテムの効果を30％上昇させる。"
    },
    "LG0N": {
        name_en: "S7:Mind Merge",
        name_jp: "S7:以心伝心",
        name_ko: "S7:以心伝心",
        effect_en: "Automatically answers Sympathy requests during Alter Ego. No effect if using weapon with \"Glance of Darkness\".",
        effect_jp: "アルターエゴ発動中ペットシンパシーの要求に自動支援を行う。「闇の一瞥」が優先され併用不可。",
        effect_ko: "アルターエゴ発動中ペットシンパシーの要求に自動支援を行う。「闇の一瞥」が優先され併用不可。"
    },
    "LG0O": {
        name_en: "S7:Sentinel's Gift",
        name_jp: "S7:法護の与",
        name_ko: "S7:法護の与",
        effect_en: "Upon a successful<br>Tech Charge Parry,<br>recover 5% HP and 10 PP.",
        effect_jp: "テックCパリング成功時HPを5%回復しPPを10回復。",
        effect_ko: "テックCパリング成功時HPを5%回復しPPを10回復。"
    },
    "LH0A": {
        name_en: "S8:Sky Dance's Boon",
        name_jp: "S8:舞空の援",
        name_ko: "S8:舞空の援",
        effect_en: "Activates Shifta and Deband every 10 seconds when you stay in the air for longer than 2 seconds.",
        effect_jp: "2秒間、滞空状態が続くと、10秒間ごとにシフタ、デバンド発動。",
        effect_ko: "2秒間、滞空状態が続くと、10秒間ごとにシフタ、デバンド発動。"
    },
    "LH0B": {
        name_en: "S8:Strong Potency",
        name_jp: "S8:服薬強身",
        name_ko: "S8:服薬強身",
        effect_en: "Makes you temporarily invincible after drinking a -mate item.",
        effect_jp: "自身でメイト系アイテム使用時、一定時間無敵。",
        effect_ko: "自身でメイト系アイテム使用時、一定時間無敵。"
    },
    "LH0C": {
        name_en: "S8:S-ATK Up",
        name_jp: "S8:打撃上昇",
        name_ko: "S8:打撃上昇",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_ko: "타격력(+30)"
    },
    "LH0D": {
        name_en: "S8:R-ATK Up",
        name_jp: "S8:射撃上昇",
        name_ko: "S8:射撃上昇",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_ko: "사격력(+30)"
    },
    "LH0E": {
        name_en: "S8:T-ATK Up",
        name_jp: "S8:法撃上昇",
        name_ko: "S8:法撃上昇",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_ko: "법격력(+30)"
    },
    "LH0F": {
        name_en: "S8:HP Up",
        name_jp: "S8:活器上昇",
        name_ko: "S8:活器上昇",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_ko: "HP(+40)"
    },
    "LH0G": {
        name_en: "S8:PP Up",
        name_jp: "S8:輝器上昇",
        name_ko: "S8:輝器上昇",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_ko: "PP(+4)"
    },
    "LH0H": {
        name_en: "S8:HP Up 2",
        name_jp: "S8:活器上昇2",
        name_ko: "S8:活器上昇2",
        effect_en: "HP(+60)",
        effect_jp: "HP(+60)",
        effect_ko: "HP(+60)"
    },
    "LH0I": {
        name_en: "S8:PP Up 2",
        name_jp: "S8:輝器上昇2",
        name_ko: "S8:輝器上昇2",
        effect_en: "PP(+6)",
        effect_jp: "PP(+6)",
        effect_ko: "PP(+6)"
    },
    "LH0J": {
        name_en: "S8:High-Minded",
        name_jp: "S8:一念滞空",
        name_ko: "S8:一念滞空",
        effect_en: "Reduce falling speed while charging a Technique in mid-air.",
        effect_jp: "空中でテクニックをチャージ中に落下速度が遅くなる。",
        effect_ko: "空中で테크닉をチャージ中に落下速度が遅くなる。"
    },
    "OA01": {
        name_en: "Mutation I",
        name_jp: "ミューテーション Ⅰ",
        name_ko: "뮤테이션 Ⅰ",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+10)",
        effect_jp: "타격력(+10),<br>사격력(+10),<br>,法撃力(+10)<br>HP(+10)",
        effect_ko: "타격력(+10),<br>사격력(+10),<br>,법격력(+10)<br>HP(+10)"
    },
    "OA02": {
        name_en: "Mutation II",
        name_jp: "ミューテーション Ⅱ",
        name_ko: "뮤테이션 Ⅱ",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+15)",
        effect_jp: "타격력(+15),<br>사격력(+15),<br>,法撃力(+15)<br>HP(+15)",
        effect_ko: "타격력(+15),<br>사격력(+15),<br>,법격력(+15)<br>HP(+15)"
    },
    "RA11": {
        name_en: "Gunne Soul",
        name_jp: "グンネ・ソール",
        name_ko: "군네 소울",
        effect_en: "S-ATK(+15),<br>HP(+45)",
        effect_jp: "타격력(+15),<br>HP(+45)",
        effect_ko: "타격력(+15),<br>HP(+45)"
    },
    "RA15": {
        name_en: "Zigmor Soul",
        name_jp: "ジグモル・ソール",
        name_ko: "지그몰 소울",
        effect_en: "S-ATK(+15),<br>PP(+4)",
        effect_jp: "打撃力(+15),<br>PP(+4)",
        effect_ko: "타격력(+15),<br>PP(+4)"
    },
    "RA21": {
        name_en: "Vol Soul",
        name_jp: "ヴォル・ソール",
        name_ko: "볼 소울",
        effect_en: "S-ATK(+30),<br>HP(+20)",
        effect_jp: "打撃力(+30),<br>HP(+20)",
        effect_ko: "타격력(+30),<br>HP(+20)"
    },
    "RA22": {
        name_en: "Gwana Soul",
        name_jp: "グワナ・ソール",
        name_ko: "구와나 소울",
        effect_en: "S-ATK(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "打撃力(+30),<br>HP(+10),<br>PP(+2)",
        effect_ko: "타격력(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RA23": {
        name_en: "Quartz Soul",
        name_jp: "クォーツ・ソール",
        name_ko: "쿼츠 소울",
        effect_en: "S-ATK(+30),<br>PP(+3)",
        effect_jp: "打撃力(+30),<br>PP(+3)",
        effect_ko: "타격력(+30),<br>PP(+3)"
    },
    "RA31": {
        name_en: "Deadleon Soul",
        name_jp: "デッドリオン・ソール",
        name_ko: "데드리온 소울",
        effect_en: "S-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>HP(+30)",
        effect_ko: "타격력(+35),<br>기량(+5),<br>HP(+30)"
    },
    "RA32": {
        name_en: "Leone Soul",
        name_jp: "レオーネ・ソール",
        name_ko: "레오네 소울",
        effect_en: "S-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "타격력(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)",
        effect_ko: "타격력(+35),<br>기량(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RA33": {
        name_en: "Bayari Soul",
        name_jp: "ベーアリ・ソール",
        name_ko: "베아리 소울",
        effect_en: "S-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>PP(+3)",
        effect_ko: "타격력(+35),<br>기량(+5),<br>PP(+3)"
    },
    "RB11": {
        name_en: "Idetta Soul",
        name_jp: "イーデッタ・ソール",
        name_ko: "이뎃타 소울",
        effect_en: "R-ATK(+15),<br>HP(+45)",
        effect_jp: "射撃力(+15),<br>HP(+45)",
        effect_ko: "사격력(+15),<br>HP(+45)"
    },
    "RB15": {
        name_en: "Madu Soul",
        name_jp: "マドゥ・ソール",
        name_ko: "마두 소울",
        effect_en: "R-ATK(+15),<br>PP(+4)",
        effect_jp: "射撃力(+15),<br>PP(+4)",
        effect_ko: "사격력(+15),<br>PP(+4)"
    },
    "RB21": {
        name_en: "Ra\'nsa Soul",
        name_jp: "ランサ・ソール",
        name_ko: "란사 소울",
        effect_en: "R-ATK(+30),<br>HP(+20)",
        effect_jp: "射撃力(+30),<br>HP(+20)",
        effect_ko: "사격력(+30),<br>HP(+20)"
    },
    "RB22": {
        name_en: "Fang Soul",
        name_jp: "ファング・ソール",
        name_ko: "팡 소울",
        effect_en: "R-ATK(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "射撃力(+30),<br>HP(+10),<br>PP(+2)",
        effect_ko: "사격력(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RB23": {
        name_en: "Mizer Soul",
        name_jp: "マイザー・ソール",
        name_ko: "마이저 소울",
        effect_en: "R-ATK(+30),<br>PP(+3)",
        effect_jp: "射撃力(+30),<br>PP(+3)",
        effect_ko: "사격력(+30),<br>PP(+3)"
    },
    "RB31": {
        name_en: "Leopard Soul",
        name_jp: "レオパード・ソール",
        name_ko: "레오파드 소울",
        effect_en: "R-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>HP(+30)",
        effect_ko: "사격력(+35),<br>기량(+5),<br>HP(+30)"
    },
    "RB32": {
        name_en: "Siorg Soul",
        name_jp: "ジオーグ・ソール",
        name_ko: "지오그 소울",
        effect_en: "R-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "사격력(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)",
        effect_ko: "사격력(+35),<br>기량(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RB33": {
        name_en: "Greuzoras Soul",
        name_jp: "グリュゾラス・ソール",
        name_ko: "그류조라스 소울",
        effect_en: "R-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>PP(+3)",
        effect_ko: "사격력(+35),<br>기량(+5),<br>PP(+3)"
    },
    "RC11": {
        name_en: "Jhadu Soul",
        name_jp: "ジャドゥ・ソール",
        name_ko: "쟈두 소울",
        effect_en: "T-ATK(+15),<br>HP(+45)",
        effect_jp: "法撃力(+15),<br>HP(+45)",
        effect_ko: "법격력(+15),<br>HP(+45)"
    },
    "RC13": {
        name_en: "Nepto Soul",
        name_jp: "ネプト・ソール",
        name_ko: "네프트 소울",
        effect_en: "T-ATK(+15),<br>PP(+4)",
        effect_jp: "法撃力(+15),<br>PP(+4)",
        effect_ko: "법격력(+15),<br>PP(+4)"
    },
    "RC21": {
        name_en: "Ragne Soul",
        name_jp: "ラグネ・ソール",
        name_ko: "라그네 소울",
        effect_en: "T-ATK(+30),<br>HP(+20)",
        effect_jp: "法撃力(+30),<br>HP(+20)",
        effect_ko: "법격력(+30),<br>HP(+20)"
    },
    "RC22": {
        name_en: "Wolga Soul",
        name_jp: "ウォルガ・ソール",
        name_ko: "워루가 소울",
        effect_en: "T-ATK(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "法撃力(+30),<br>HP(+10),<br>PP(+2)",
        effect_ko: "법격력(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RC23": {
        name_en: "Elder Soul",
        name_jp: "エルダー・ソール",
        name_ko: "엘더 소울",
        effect_en: "T-ATK(+30),<br>PP(+3)",
        effect_jp: "法撃力(+30),<br>PP(+3)",
        effect_ko: "법격력(+30),<br>PP(+3)"
    },
    "RC31": {
        name_en: "Diabo Soul",
        name_jp: "ディアボ・ソール",
        name_ko: "디아보 소울",
        effect_en: "T-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>HP(+30)",
        effect_ko: "법격력(+35),<br>기량(+5),<br>HP(+30)"
    },
    "RC32": {
        name_en: "Duvals Soul",
        name_jp: "ドゥバルス・ソール",
        name_ko: "드발스 소울",
        effect_en: "T-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "법격력(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)",
        effect_ko: "법격력(+35),<br>기량(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RC33": {
        name_en: "Guranz Soul",
        name_jp: "グランゾ・ソール",
        name_ko: "그랑조 소울",
        effect_en: "T-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>PP(+3)",
        effect_ko: "법격력(+35),<br>기량(+5),<br>PP(+3)"
    },
    "RE13": {
        name_en: "Nyau Soul",
        name_jp: "ニャウ・ソール",
        name_ko: "냐우 소울",
        effect_en: "DEX(+15),<br>PP(+4)",
        effect_jp: "技量(+15),<br>PP(+4)",
        effect_ko: "기량(+15),<br>PP(+4)"
    },
    "RE21": {
        name_en: "Signo Soul",
        name_jp: "シグノ・ソール",
        name_ko: "시그노 소울",
        effect_en: "DEX(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "技量(+30),<br>HP(+20),<br>PP(+1)",
        effect_ko: "기량(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RE22": {
        name_en: "Chrome Soul",
        name_jp: "クローム・ソール",
        name_ko: "크롬 소울",
        effect_en: "DEX(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "技量(+30),<br>HP(+10),<br>PP(+3)",
        effect_ko: "기량(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RE23": {
        name_en: "Rappy Soul",
        name_jp: "ラッピー・ソール",
        name_ko: "랍피 소울",
        effect_en: "DEX(+30),<br>PP(+4)",
        effect_jp: "技量(+30),<br>PP(+4)",
        effect_ko: "기량(+30),<br>PP(+4)"
    },
    "RE51": {
        name_en: "Sinow Soul",
        name_jp: "シノワ・ソール",
        name_ko: "시노와 소울",
        effect_en: "S-ATK(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)",
        effect_jp: "타격력(+5),<br>技量(+30),<br>HP(+25)<br>PP(+2)",
        effect_ko: "타격력(+5),<br>기량(+30),<br>HP(+25)<br>PP(+2)"
    },
    "RH21": {
        name_en: "Snow Soul",
        name_jp: "スノウ・ソール",
        name_ko: "스노우 소울",
        effect_en: "S-DEF(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃防御(+30),<br>HP(+20),<br>PP(+1)",
        effect_ko: "타격 방어(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RH22": {
        name_en: "Rockbear Soul",
        name_jp: "ロックベア・ソール",
        name_ko: "록베어 소울",
        effect_en: "S-DEF(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "打撃防御(+30),<br>HP(+10),<br>PP(+3)",
        effect_ko: "타격 방어(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RH23": {
        name_en: "Ex Soul",
        name_jp: "エクス・ソール",
        name_ko: "엑스 소울",
        effect_en: "S-DEF(+30),<br>PP(+4)",
        effect_jp: "打撃防御(+30),<br>PP(+4)",
        effect_ko: "타격 방어(+30),<br>PP(+4)"
    },
    "RI21": {
        name_en: "Malmo Soul",
        name_jp: "マルモ・ソール",
        name_ko: "마르모 소울",
        effect_en: "R-DEF(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "射撃防御(+30),<br>HP(+20),<br>PP(+1)",
        effect_ko: "사격 방어(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RI22": {
        name_en: "Persona Soul",
        name_jp: "ペルソナ・ソール",
        name_ko: "페르소나 소울",
        effect_en: "R-DEF(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "射撃防御(+30),<br>HP(+10),<br>PP(+3)",
        effect_ko: "사격 방어(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RI23": {
        name_en: "Vardha Soul",
        name_jp: "ヴァーダー・ソール",
        name_ko: "버더 소울",
        effect_en: "R-DEF(+30),<br>PP(+4)",
        effect_jp: "射撃防御(+30),<br>PP(+4)",
        effect_ko: "사격 방어(+30),<br>PP(+4)"
    },
    "RJ21": {
        name_en: "Cater Soul",
        name_jp: "キャタ・ソール",
        name_ko: "캐터 소울",
        effect_en: "T-DEF(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "法撃防御(+30),<br>HP(+20),<br>PP(+1)",
        effect_ko: "법격 방어(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RJ22": {
        name_en: "Shrayda Soul",
        name_jp: "シュレイダ・ソール",
        name_ko: "슈레이다 소울",
        effect_en: "T-DEF(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "法撃防御(+30),<br>HP(+10),<br>PP(+3)",
        effect_ko: "법격 방어(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RJ23": {
        name_en: "Goron Soul",
        name_jp: "ゴロン・ソール",
        name_ko: "고론 소울",
        effect_en: "T-DEF(+30),<br>PP(+4)",
        effect_jp: "法撃防御(+30),<br>PP(+4)",
        effect_ko: "법격 방어(+30),<br>PP(+4)"
    },
    "ROA1": {
        name_en: "Org Soul",
        name_jp: "オルグ・ソール",
        name_ko: "오그 소울",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>HP(+10)",
        effect_jp: "타격력(+20),<br>射撃力(+20),<br>HP(+10)",
        effect_ko: "타격력(+20),<br>사격력(+20),<br>HP(+10)"
    },
    "ROA2": {
        name_en: "Meduna Soul",
        name_jp: "メデューナ・ソール",
        name_ko: "메듀나 소울",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "타격력(+20),<br>射撃力(+20),<br>HP(+5),<br>PP(+1)",
        effect_ko: "타격력(+20),<br>사격력(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROA3": {
        name_en: "Soma Soul",
        name_jp: "ソーマ・ソール",
        name_ko: "소마 소울",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>PP(+2)",
        effect_ko: "타격력(+20),<br>사격력(+20),<br>PP(+2)"
    },
    "ROC1": {
        name_en: "Ringa Soul",
        name_jp: "リンガ・ソール",
        name_ko: "링가 소울",
        effect_en: "S-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
        effect_jp: "타격력(+20),<br>法撃力(+20),<br>HP(+10)",
        effect_ko: "타격력(+20),<br>법격력(+20),<br>HP(+10)"
    },
    "ROC2": {
        name_en: "Loser Soul",
        name_jp: "ルーサー・ソール",
        name_ko: "루서 소울",
        effect_en: "S-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "타격력(+20),<br>法撃力(+20),<br>HP(+5),<br>PP(+1)",
        effect_ko: "타격력(+20),<br>법격력(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROC3": {
        name_en: "Malluda Soul",
        name_jp: "マリューダ・ソール",
        name_ko: "마류다 소울",
        effect_en: "S-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>法撃力(+20),<br>PP(+2)",
        effect_ko: "타격력(+20),<br>법격력(+20),<br>PP(+2)"
    },
    "ROE1": {
        name_en: "Bal Soul",
        name_jp: "バル・ソール",
        name_ko: "발 소울",
        effect_en: "R-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
        effect_jp: "사격력(+20),<br>法撃力(+20),<br>HP(+10)",
        effect_ko: "사격력(+20),<br>법격력(+20),<br>HP(+10)"
    },
    "ROE2": {
        name_en: "Vibrace Soul",
        name_jp: "ビブラス・ソール",
        name_ko: "비브라스 소울",
        effect_en: "R-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "사격력(+20),<br>法撃力(+20),<br>HP(+5),<br>PP(+1)",
        effect_ko: "사격력(+20),<br>법격력(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROE3": {
        name_en: "Tagami Kazuchi Soul",
        name_jp: "タガミカヅチ・ソール",
        name_ko: "타가미카즈치 소울",
        effect_en: "R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        effect_jp: "射撃力(+20),<br>法撃力(+20),<br>PP(+2)",
        effect_ko: "사격력(+20),<br>법격력(+20),<br>PP(+2)"
    },
    "ROG5": {
        name_en: "Lili Soul",
        name_jp: "リーリー・ソール",
        name_ko: "리리 소울",
        effect_en: "S-ATK(+20),<br>S-DEF(+20),<br>HP(+20)",
        effect_jp: "타격력(+20),<br打撃防御(+20),<br>HP(+20)",
        effect_ko: "타격력(+20),<br타격 방어(+20),<br>HP(+20)"
    },
    "RP05": {
        name_en: "Cougar Soul",
        name_jp: "クーガー・ソール",
        name_ko: "쿠거 소울",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)",
        effect_jp: "타격력(+15),<br>사격력(+15),<br>법격력(+15),<br>技量(+15),<br>HP(+10),<br>PP(+2)",
        effect_ko: "타격력(+15),<br>사격력(+15),<br>법격력(+15),<br>기량(+15),<br>HP(+10),<br>PP(+2)"
    },
    "RP10": {
        name_en: "Gryphon Soul",
        name_jp: "グリフォン・ソール",
        name_ko: "그리폰 소울",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)",
        effect_jp: "타격력(+15),<br>사격력(+15),<br>법격력(+15),<br>技量(+15),<br>HP(+5),<br>PP(+3)",
        effect_ko: "타격력(+15),<br>사격력(+15),<br>법격력(+15),<br>기량(+15),<br>HP(+5),<br>PP(+3)"
    },
    "RP15": {
        name_en: "Knight Gear Soul",
        name_jp: "ナイトギア・ソール",
        name_ko: "나이트기어 소울",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>PP(+4)",
        effect_jp: "타격력(+15),<br>사격력(+15),<br>法撃力(+15),<br>技量(+15),<br>PP(+4)",
        effect_ko: "타격력(+15),<br>사격력(+15),<br>법격력(+15),<br>기량(+15),<br>PP(+4)"
    },
    "RP22": {
        name_en: "Izane Kazuchi Soul",
        name_jp: "イザネカヅチ・ソール",
        name_ko: "이자네카즈치 소울",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        effect_jp: "타격력(+20),<br>射撃力(+20),<br>法撃力(+20),<br>PP(+2)",
        effect_ko: "타격력(+20),<br>사격력(+20),<br>법격력(+20),<br>PP(+2)"
    },
    "RP25": {
        name_en: "Anga Soul",
        name_jp: "アンガ・ソール",
        name_ko: "앙가 소울",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+4)",
        effect_jp: "타격력(+20),<br>射撃力(+20),<br>法撃力(+20),<br>PP(+4)",
        effect_ko: "타격력(+20),<br>사격력(+20),<br>법격력(+20),<br>PP(+4)"
    },
    "RP55": {
        name_en: "Apprentice Soul",
        name_jp: "アプレンティス・ソール",
        name_ko: "어프렌티스 소울",
        effect_en: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40)",
        effect_jp: "타격력(+40),<br>射撃力(+40),<br>法撃力(+40)",
        effect_ko: "타격력(+40),<br>사격력(+40),<br>법격력(+40)"
    },
    "RPA5": {
        name_en: "Magatsu Soul",
        name_jp: "マガツ・ソール",
        name_ko: "마가츠 소울",
        effect_en: "S-DEF(+15),<br>R-DEF(+15),<br>T-DEF(+15),<br>HP(+30),<br>PP(+3)",
        effect_jp: "타격 방어(+15),<br>사격 방어(+15),<br>法撃防御(+15),<br>HP(+30),<br>PP(+3)",
        effect_ko: "타격 방어(+15),<br>사격 방어(+15),<br>법격 방어(+15),<br>HP(+30),<br>PP(+3)"
    },
    "RQ01": {
        name_en: "Double Soul",
        name_jp: "ダブル・ソール",
        name_ko: "더블 소울",
        effect_en: "HP(+40),<br>PP(+3)",
        effect_jp: "HP(+40),<br>PP(+3)",
        effect_ko: "HP(+40),<br>PP(+3)"
    },
    "RZ01": {
        name_en: "Darkness Soul",
        name_jp: "ダークネス・ソール",
        name_ko: "다크니스 소울",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_ko: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "SA01": {
        name_en: "Astral Soul",
        name_jp: "アストラル・ソール",
        name_ko: "아스트랄 소울",
        effect_en: "ALL(+35),<br>HP(+35),<br>PP(+5)",
        effect_jp: "ALL(+35),<br>HP(+35),<br>PP(+5)",
        effect_ko: "ALL(+35),<br>HP(+35),<br>PP(+5)"
    },
	"SA02": {
        name_en: "Guardian Soul",
        name_jp: "ガーディアン・ソール",
        name_ko: "가디언 소울",
        effect_en: "ALL(+70),<br>HP(+70),<br>PP(+7)",
        effect_jp: "ALL(+70),<br>HP(+70),<br>PP(+7)",
        effect_ko: "ALL(+70),<br>HP(+70),<br>PP(+7)"
    },
    "SA11": {
        name_en: "Ether Soul",
        name_jp: "エーテル・ソール",
        name_ko: "에테르 소울",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_ko: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "SB01": {
        name_en: "Toh\'oh Soul",
        name_jp: "トウオウ・ソール",
        name_ko: "토우오우 소울",
        effect_en: "ALL(+10)",
        effect_jp: "ALL(+10)",
        effect_ko: "ALL(+10)"
    },
    "SB02": {
        name_en: "Full Vegas Soul",
        name_jp: "フルベガス・ソール",
        name_ko: "풀 베가스 소울",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15)",
        effect_jp: "타격력(+15),<br>射撃力(+15),<br>法撃力(+15)",
        effect_ko: "타격력(+15),<br>사격력(+15),<br>법격력(+15)"
    },
    "SB03": {
        name_en: "Escarde Soul",
        name_jp: "エスカード・ソール",
        name_ko: "에스카드 소울",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>DEX(+20)",
        effect_jp: "타격력(+10),<br>사격력(+10),<br>法撃力(+10),<br>技量(+20)",
        effect_ko: "타격력(+10),<br>사격력(+10),<br>법격력(+10),<br>기량(+20)"
    },
    "SB04": {
        name_en: "Fabula Soul",
        name_jp: "ファーブラ・ソール",
        name_ko: "파불라 소울",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
        effect_jp: "타격력(+10),<br>사격력(+10),<br>法撃力(+10),<br>HP(+20)",
        effect_ko: "타격력(+10),<br>사격력(+10),<br>법격력(+10),<br>HP(+20)"
    },
    "SB05": {
        name_en: "Historia Soul",
        name_jp: "イストリア・ソール",
        name_ko: "이스토리아 소울",
        effect_en: "S-DEF(+25),<br>R-DEF(+25),<br>T-DEF(+25),<br>HP(+30),<br>PP(+2)",
        effect_jp: "타격 방어(+25),<br>사격 방어(+25),<br>法撃防御(+25),<br>HP(+30),<br>PP(+2)",
        effect_ko: "타격 방어(+25),<br>사격 방어(+25),<br>법격 방어(+25),<br>HP(+30),<br>PP(+2)"
    },
    "SH10": {
        name_en: "Act The Soul",
        name_jp: "アクト・ジ・ソール",
        name_ko: "액트 지 소울",
        effect_en: "S-ATK(+35),<br>PP(+3)",
        effect_jp: "打撃力(+35),<br>PP(+3)",
        effect_ko: "타격력(+35),<br>PP(+3)"
    },
    "SH20": {
        name_en: "Till The Soul",
        name_jp: "ティル・ジ・ソール",
        name_ko: "틸 지 소울",
        effect_en: "R-ATK(+35),<br>PP(+3)",
        effect_jp: "射撃力(+35),<br>PP(+3)",
        effect_ko: "사격력(+35),<br>PP(+3)"
    },
    "SH30": {
        name_en: "Magi The Soul",
        name_jp: "マギー・ジ・ソール",
        name_ko: "마기 지 소울",
        effect_en: "T-ATK(+35),<br>PP(+3)",
        effect_jp: "法撃力(+35),<br>PP(+3)",
        effect_ko: "법격력(+35),<br>PP(+3)"
    },
    "SH40": {
        name_en: "Ares The Soul",
        name_jp: "アレス・ジ・ソール",
        name_ko: "아레스 지 소울",
        effect_en: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>HP(+35),<br>PP(+3)",
        effect_jp: "타격력(+25),<br>사격력(+25),<br>法撃力(+25),<br>HP(+35),<br>PP(+3)",
        effect_ko: "타격력(+25),<br>사격력(+25),<br>법격력(+25),<br>HP(+35),<br>PP(+3)"
    },
    "SI01": {
        name_en: "Ex Act Soul",
        name_jp: "イクスアクト・ソール",
        name_ko: "익스 액트 소울",
        effect_en: "S-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "타격력(+30),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_ko: "타격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+2)"
    },
    "SI02": {
        name_en: "Ex Till Soul",
        name_jp: "イクスティル・ソール",
        name_ko: "익스 틸 소울",
        effect_en: "R-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "사격력(+30),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_ko: "사격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+2)"
    },
    "SI03": {
        name_en: "Ex Magi Soul",
        name_jp: "イクスマギー・ソール",
        name_ko: "익스 마기 소울",
        effect_en: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "법격력(+30),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_ko: "법격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+2)"
    },
    "SI04": {
        name_en: "Ex Ares Soul",
        name_jp: "イクスアレス・ソール",
        name_ko: "익스 아레스 소울",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+50), PP(+2)",
        effect_jp: "타격력(+20),사격력(+20),법격력(+20),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+50),PP(+2)",
        effect_ko: "타격력(+20),사격력(+20),법격력(+20),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+50),PP(+2)"
    },
    "TA01": {
        name_en: "Stigma",
        name_jp: "スティグマ",
        name_ko: "스티그마",
        effect_en: "DEX(+20),<br>PP(+5)",
        effect_jp: "技量(+20),<br>PP(+5)",
        effect_ko: "기량(+20),<br>PP(+5)"
    },
    "TB01": {
        name_en: "Vinculum",
        name_jp: "ウィンクルム",
        name_ko: "빈큘럼",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20)",
        effect_jp: "타격력(+20),<br>射撃力(+20),<br>法撃力(+20)",
        effect_ko: "타격력(+20),<br>사격력(+20),<br>법격력(+20)"
    },
    "TC01": {
        name_en: "Modulator",
        name_jp: "モデュレイター",
        name_ko: "모듈레이터",
        effect_en: "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30)",
        effect_jp: "타격력(+30),<br>射撃力(+30),<br>法撃力(+30)",
        effect_ko: "타격력(+30),<br>사격력(+30),<br>법격력(+30)"
    },
    "TL01": {
        name_en: "ARKS Max",
        name_jp: "アクス・ＭＡＸ",
        name_ko: "아크스 MAX",
        effect_en: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25)",
        effect_jp: "타격력(+25),<br>射撃力(+25),<br>法撃力(+25)",
        effect_ko: "타격력(+25),<br>사격력(+25),<br>법격력(+25)"
    },
    "TG02": {
        name_en: "Yamato Factor",
        name_jp: "ヤマト・ファクター",
        name_ko: "야마토 팩터",
        effect_en: "S-ATK(+10),<br>R-ATK(+20),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
        effect_jp: "타격력(+10),<br>사격력(+20),<br>法撃力(+10),<br>HP(+20),<br>PP(+1)",
        effect_ko: "타격력(+10),<br>사격력(+20),<br>법격력(+10),<br>HP(+20),<br>PP(+1)"
    },
    "TG03": {
        name_en: "Mother Factor",
        name_jp: "マザー・ファクター",
        name_ko: "마더 팩터",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+20),<br>HP(+20),<br>PP(+1)",
        effect_jp: "타격력(+10),<br>사격력(+10),<br>法撃力(+20),<br>HP(+20),<br>PP(+1)",
        effect_ko: "타격력(+10),<br>사격력(+10),<br>법격력(+20),<br>HP(+20),<br>PP(+1)"
    },
    "TG04": {
        name_en: "Deus Factor",
        name_jp: "デウス・ファクター",
        name_ko: "데우스 팩터",
        effect_en: "S-ATK(+20),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
        effect_jp: "타격력(+20),<br>사격력(+10),<br>法撃力(+10),<br>HP(+20),<br>PP(+1)",
        effect_ko: "타격력(+20),<br>사격력(+10),<br>법격력(+10),<br>HP(+20),<br>PP(+1)"
    },
    "TG31": {
        name_en: "Ether Factor",
        name_jp: "エーテル・ファクター",
        name_ko: "에테르 팩터",
        effect_en: "ALL(+30),<br>HP(+10),<br>PP(+6)",
        effect_jp: "ALL(+30),<br>HP(+10),<br>PP(+6)",
        effect_ko: "ALL(+30),<br>HP(+10),<br>PP(+6)"
    },
    "TK01": {
        name_en: "Omega Reverie",
        name_jp: "オメガ・レヴリー",
        name_ko: "오메가 레브리",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+20),<br>PP(+1)",
        effect_jp: "타격력(+15),<br>사격력(+15),<br>法撃力(+15),<br>HP(+20),<br>PP(+1)",
        effect_ko: "타격력(+15),<br>사격력(+15),<br>법격력(+15),<br>HP(+20),<br>PP(+1)"
    },
    "TK02": {
        name_en: "Elder Reverie",
        name_jp: "エルダー・レヴリー",
        name_ko: "엘더 레브리",
        effect_en: "S-ATK(+40),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(-2)",
        effect_jp: "타격력(+40),<br>射撃力(+20),<br>法撃力(+20),<br>PP(-2)",
        effect_ko: "타격력(+40),<br>사격력(+20),<br>법격력(+20),<br>PP(-2)"
    },
    "TK03": {
        name_en: "Loser Reverie",
        name_jp: "ルーサー・レヴリー",
        name_ko: "루서 레브리",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+40),<br>HP(-20)",
        effect_jp: "타격력(+20),<br>사격력(+20),<br>法撃力(+40),<br>HP(-20)",
        effect_ko: "타격력(+20),<br>사격력(+20),<br>법격력(+40),<br>HP(-20)"
    },
    "TK04": {
        name_en: "Apprezina Reverie",
        name_jp: "アプレジナ・レヴリー",
        name_ko: "어프레지나 레브리",
        effect_en: "S-ATK(+20),<br>R-ATK(+40),<br>T-ATK(+20),<br>HP(-10),<br>PP(-1)",
        effect_jp: "타격력(+20),<br>사격력(+40),<br>法撃力(+20),<br>HP(-10),<br>PP(-1)",
        effect_ko: "타격력(+20),<br>사격력(+40),<br>법격력(+20),<br>HP(-10),<br>PP(-1)"
    },
    "TK05": {
        name_en: "Double Reverie",
        name_jp: "ダブル・レヴリー",
        name_ko: "더블 레브리",
        effect_en: "S-ATK(-20),<br>R-ATK(-20),<br>T-ATK(-20),<br>HP(+50),<br>PP(+5)",
        effect_jp: "타격력(-20),<br>사격력(-20),<br>法撃力(-20),<br>HP(+50),<br>PP(+5)",
        effect_ko: "타격력(-20),<br>사격력(-20),<br>법격력(-20),<br>HP(+50),<br>PP(+5)"
    },
    "TK06": {
        name_en: "Persona Reverie",
        name_jp: "ペルソナ・レヴリー",
        name_ko: "페르소나 레브리",
        effect_en: "S-ATK(+40),R-ATK(+40),T-ATK(+40),S-DEF(-20),R-DEF(-20),T-DEF(-20)",
        effect_jp: "타격력(+40),사격력(+40),법격력(+40),打撃防御(-20),射撃防御(-20),法撃防御(-20)",
        effect_ko: "타격력(+40),사격력(+40),법격력(+40),타격 방어(-20),사격 방어(-20),법격 방어(-20)"
    },
    "TK10": {
        name_en: "Mana Reverie",
        name_jp: "マナ・レヴリー",
        name_ko: "마나 레브리",
        effect_en: "S-ATK(+50),R-ATK(+50),T-ATK(+50),HP(+20),PP(+4)",
        effect_jp: "타격력(+50),射撃力(+50),法撃力(+50),HP(+20),PP(+4)",
        effect_ko: "타격력(+50),사격력(+50),법격력(+50),HP(+20),PP(+4)"
    },
    "TJ01": {
        name_en: "Omega Memoria",
        name_jp: "オメガ・メモリア",
        name_ko: "오메가 메모리아",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_ko: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "TE01": {
        name_en: "Returner I",
        name_jp: "リターナー Ⅰ",
        name_ko: "리터너 Ⅰ",
        effect_en: "ALL(+3),<br>HP(+3),<br>PP(+1)",
        effect_jp: "ALL(+3),<br>HP(+3),<br>PP(+1)",
        effect_ko: "ALL(+3),<br>HP(+3),<br>PP(+1)"
    },
    "TE02": {
        name_en: "Returner II",
        name_jp: "リターナー Ⅱ",
        name_ko: "리터너 Ⅱ",
        effect_en: "ALL(+5),<br>HP(+5),<br>PP(+2)",
        effect_jp: "ALL(+5),<br>HP(+5),<br>PP(+2)",
        effect_ko: "ALL(+5),<br>HP(+5),<br>PP(+2)"
    },
    "TE03": {
        name_en: "Returner III",
        name_jp: "リターナー Ⅲ",
        name_ko: "리터너 Ⅲ",
        effect_en: "ALL(+10),<br>HP(+10),<br>PP(+3)",
        effect_jp: "ALL(+10),<br>HP(+10),<br>PP(+3)",
        effect_ko: "ALL(+10),<br>HP(+10),<br>PP(+3)"
    },
    "TE04": {
        name_en: "Returner IV",
        name_jp: "リターナー Ⅳ",
        name_ko: "리터너 Ⅳ",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+4)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+4)",
        effect_ko: "ALL(+15),<br>HP(+15),<br>PP(+4)"
    },
    "TE05": {
        name_en: "Returner V",
        name_jp: "リターナー Ⅴ",
        name_ko: "리터너 Ⅴ",
        effect_en: "ALL(+30),<br>HP(+30),<br>PP(+5)",
        effect_jp: "ALL(+30),<br>HP(+30),<br>PP(+5)",
        effect_ko: "ALL(+30),<br>HP(+30),<br>PP(+5)"
    },
    "TM01": {
        name_en: "Crack I",
        name_jp: "クラックI",
        name_ko: "크랙 I",
        effect_en: "S-ATK(+3), R-ATK(+3), T-ATK(+3), S-DEF(+5), R-DEF(+5), T-DEF(+5), HP(+5), PP(+1)",
        effect_jp: "타격력(+3),사격력(+3),법격력(+3),타격 방어(+5),射撃防御(+5),法撃防御(+5),HP(+5),PP(+1)",
        effect_ko: "타격력(+3),사격력(+3),법격력(+3),타격 방어(+5),사격 방어(+5),법격 방어(+5),HP(+5),PP(+1)"
    },
    "TM02": {
        name_en: "Crack II",
        name_jp: "クラックII",
        name_ko: "크랙 II",
        effect_en: "S-ATK(+5), R-ATK(+5), T-ATK(+5), S-DEF(+10), R-DEF(+10), T-DEF(+10), HP(+10), PP(+1)",
        effect_jp: "타격력(+5),사격력(+5),법격력(+5),타격 방어(+10),사격 방어(+10),法撃防御(+10),HP(+10),PP(+1)",
        effect_ko: "타격력(+5),사격력(+5),법격력(+5),타격 방어(+10),사격 방어(+10),법격 방어(+10),HP(+10),PP(+1)"
    },
    "TM03": {
        name_en: "Crack III",
        name_jp: "クラックIII",
        name_ko: "크랙 III",
        effect_en: "S-ATK(+10), R-ATK(+10), T-ATK(+10), S-DEF(+15), R-DEF(+15), T-DEF(+15), HP(+15), PP(+1)",
        effect_jp: "타격력(+10),사격력(+10),법격력(+10),타격 방어(+15),사격 방어(+15),法撃防御(+15),HP(+15),PP(+1)",
        effect_ko: "타격력(+10),사격력(+10),법격력(+10),타격 방어(+15),사격 방어(+15),법격 방어(+15),HP(+15),PP(+1)"
    },
    "TM04": {
        name_en: "Crack IV",
        name_jp: "クラックIV",
        name_ko: "크랙 IV",
        effect_en: "S-ATK(+15), R-ATK(+15), T-ATK(+15), S-DEF(+30), R-DEF(+30), T-DEF(+30), HP(+30), PP(+2)",
        effect_jp: "타격력(+15),사격력(+15),법격력(+15),타격 방어(+30),사격 방어(+30),法撃防御(+30),HP(+30),PP(+2)",
        effect_ko: "타격력(+15),사격력(+15),법격력(+15),타격 방어(+30),사격 방어(+30),법격 방어(+30),HP(+30),PP(+2)"
    },
    "TM05": {
        name_en: "Crack V",
        name_jp: "クラックV",
        name_ko: "크랙 V",
        effect_en: "S-ATK(+30), R-ATK(+30), T-ATK(+30), S-DEF(+50), R-DEF(+50), T-DEF(+50), HP(+50), PP(+2)",
        effect_jp: "타격력(+30),사격력(+30),법격력(+30),타격 방어(+50),사격 방어(+50),法撃防御(+50),HP(+50),PP(+2)",
        effect_ko: "타격력(+30),사격력(+30),법격력(+30),타격 방어(+50),사격 방어(+50),법격 방어(+50),HP(+50),PP(+2)"
    },
    "TN01": {
        name_en: "Ange Glare",
        name_jp: "アンジュール・グレア",
        name_ko: "앙쥬 글레어",
        effect_en: "S-ATK(+30), S-DEF(+40), R-DEF(+20), T-DEF(+20)",
        effect_jp: "타격력(+30),打撃防御(+40),射撃防御(+20),法撃防御(+20)",
        effect_ko: "타격력(+30),타격 방어(+40),사격 방어(+20),법격 방어(+20)"
    },
    "TN02": {
        name_en: "Veluge Glare",
        name_jp: "べルージュ・グレア",
        name_ko: "베르쥬 글레어",
        effect_en: "R-ATK(+30), S-DEF(+20), R-DEF(+40), T-DEF(+20)",
        effect_jp: "사격력(+30),打撃防御(+20),射撃防御(+40),法撃防御(+20)",
        effect_ko: "사격력(+30),타격 방어(+20),사격 방어(+40),법격 방어(+20)"
    },
    "TN03": {
        name_en: "Dominus Glare",
        name_jp: "ドゥミヌス・グレア",
        name_ko: "도미누스 글레어",
        effect_en: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+40)",
        effect_jp: "법격력(+30),打撃防御(+20),射撃防御(+20),法撃防御(+40)",
        effect_ko: "법격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+40)"
    },
    "TN04": {
        name_en: "Fordruss Glare",
        name_jp: "フォードルス・グレア",
        name_ko: "포돌스 글레어",
        effect_en: "S-DEF(+35), R-DEF(+35), T-DEF(+35), HP(+40), PP(+4)",
        effect_jp: "타격 방어(+35),사격 방어(+35),法撃防御(+35),HP(+40),PP(+4)",
        effect_ko: "타격 방어(+35),사격 방어(+35),법격 방어(+35),HP(+40),PP(+4)"
    },
    "TN05": {
        name_en: "Execour Glare",
        name_jp: "エクゼクル・グレア",
        name_ko: "엑제클 글레어",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), S-DEF(+50), R-DEF(+50), T-DEF(+50)",
        effect_jp: "타격력(+20),사격력(+20),법격력(+20),打撃防御(+50),射撃防御(+50),法撃防御(+50)",
        effect_ko: "타격력(+20),사격력(+20),법격력(+20),타격 방어(+50),사격 방어(+50),법격 방어(+50)"
    },
    "TN06": {
        name_en: "Mitra Glare",
        name_jp: "ミトラ・グレア",
        name_ko: "미트라 글레어",
        effect_en: "S-ATK(+30), R-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "타격력(+30),사격력(+30),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_ko: "타격력(+30),사격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+2)"
    },
    "TN07": {
        name_en: "Varuna Glare",
        name_jp: "ヴァルナ・グレア",
        name_ko: "바루나 글레어",
        effect_en: "S-ATK(+30), T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "타격력(+30),법격력(+30),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_ko: "타격력(+30),법격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+2)"
    },
	"TN08": {
        name_en: "Shiva Glare",
        name_jp: "シバ・グレア",
        name_ko: "시바 글레어",
        effect_en: "R-ATK(+30), T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "사격력(+30),법격력(+30),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_ko: "사격력(+30),법격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+2)"
    },
	"TN09": {
        name_en: "Origin Glare",
        name_jp: "オリジン・グレア",
        name_ko: "오리진 글레어",
        effect_en: "S-ATK(+30), R-ATK(+30), T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "타격력(+30), 사격력(+30),법격력(+30),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_ko: "타격력(+30), 사격력(+30),법격력(+30),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+2)"
    },
	"TN0A": {
        name_en: "Photoner Glare",
        name_jp: "フォトナー・グレア",
        name_ko: "포토너 글레어",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_ko: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
	"TN11": {
        name_en: "Absolute Glare",
        name_jp: "アブソリュート・グレア",
        name_ko: "앱솔루트 글레어",
        effect_en: "ALL(+40),<br>HP(+30),<br>PP(+3)",
        effect_jp: "ALL(+40),<br>HP(+30),<br>PP(+3)",
        effect_ko: "ALL(+40),<br>HP(+30),<br>PP(+3)"
    },
	"VJ04": {
        name_en: "Glare Catalyst",
        name_jp: "グレア・カタリスト",
        name_ko: "글레어 카탈리스트",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_ko: "HP(+10),<br>PP(+1)"
    },
    "TF01": {
        name_en: "Spirita Alpha",
        name_jp: "スピリタ・アルファ",
        name_ko: "스피리타 알파",
        effect_en: "DEX(+30),<br>PP(+3)",
        effect_jp: "技量(+30),<br>PP(+3)",
        effect_ko: "기량(+30),<br>PP(+3)"
    },
    "TI01": {
        name_en: "Necky Smile",
        name_jp: "ネッキー・スマイル",
        name_ko: "넷키 스마일",
        effect_en: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>PP(+2)",
        effect_jp: "타격력(+5),<br>射撃力(+5),<br>法撃力(+5),<br>PP(+2)",
        effect_ko: "타격력(+5),<br>사격력(+5),<br>법격력(+5),<br>PP(+2)"
    },
    "TH01": {
        name_en: "Doom Break",
        name_jp: "ドゥームブレイク Ⅰ",
        name_ko: "둠 브레이크 Ⅰ",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>PP(+2)",
        effect_jp: "타격력(+15),<br>射撃力(+15),<br>法撃力(+15),<br>PP(+2)",
        effect_ko: "타격력(+15),<br>사격력(+15),<br>법격력(+15),<br>PP(+2)"
    },
    "TH02": {
        name_en: "Doom Break 2",
        name_jp: "ドゥームブレイク Ⅱ",
        name_ko: "둠 브레이크 Ⅱ",
        effect_en: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>PP(+3)",
        effect_jp: "타격력(+25),<br>射撃力(+25),<br>法撃力(+25),<br>PP(+3)",
        effect_ko: "타격력(+25),<br>사격력(+25),<br>법격력(+25),<br>PP(+3)"
    },
    "TH03": {
        name_en: "Doom Break 3",
        name_jp: "ドゥームブレイク Ⅲ",
        name_ko: "둠 브레이크 Ⅲ",
        effect_en: "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30),<br>PP(+4)",
        effect_jp: "타격력(+30),<br>射撃力(+30),<br>法撃力(+30),<br>PP(+4)",
        effect_ko: "타격력(+30),<br>사격력(+30),<br>법격력(+30),<br>PP(+4)"
    },
    "LP01": {
        name_en: "Lesser Power I",
        name_jp: "レッサー・パワーⅠ",
        name_ko: "레서 파워 Ⅰ",
        effect_en: "S-ATK(+5)",
        effect_jp: "打撃力(+5)",
        effect_ko: "타격력(+5)"
    },
    "LP02": {
        name_en: "Lesser Power II",
        name_jp: "レッサー・パワーⅡ",
        name_ko: "레서 파워 Ⅱ",
        effect_en: "S-ATK(+15)",
        effect_jp: "打撃力(+15)",
        effect_ko: "타격력(+15)"
    },
    "LP03": {
        name_en: "Lesser Power III",
        name_jp: "レッサー・パワーⅢ",
        name_ko: "레서 파워 Ⅲ",
        effect_en: "S-ATK(+25)",
        effect_jp: "打撃力(+25)",
        effect_ko: "타격력(+25)"
    },
    "LP04": {
        name_en: "Lesser Power IV",
        name_jp: "レッサー・パワーⅣ",
        name_ko: "레서 파워 Ⅳ",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_ko: "타격력(+30)"
    },
    "LP05": {
        name_en: "Lesser Power V",
        name_jp: "レッサー・パワーⅤ",
        name_ko: "레서 파워 Ⅴ",
        effect_en: "S-ATK(+35)",
        effect_jp: "打撃力(+35)",
        effect_ko: "타격력(+35)"
    },
    "LS01": {
        name_en: "Lesser Shoot I",
        name_jp: "レッサー・シュートⅠ",
        name_ko: "레서 슛 Ⅰ",
        effect_en: "R-ATK(+5)",
        effect_jp: "射撃力(+5)",
        effect_ko: "사격력(+5)"
    },
    "LS02": {
        name_en: "Lesser Shoot II",
        name_jp: "レッサー・シュートⅡ",
        name_ko: "레서 슛 Ⅱ",
        effect_en: "R-ATK(+15)",
        effect_jp: "射撃力(+15)",
        effect_ko: "사격력(+15)"
    },
    "LS03": {
        name_en: "Lesser Shoot III",
        name_jp: "レッサー・シュートⅢ",
        name_ko: "레서 슛 Ⅲ",
        effect_en: "R-ATK(+25)",
        effect_jp: "射撃力(+25)",
        effect_ko: "사격력(+25)"
    },
    "LS04": {
        name_en: "Lesser Shoot IV",
        name_jp: "レッサー・シュートⅣ",
        name_ko: "레서 슛 Ⅳ",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_ko: "사격력(+30)"
    },
    "LS05": {
        name_en: "Lesser Shoot V",
        name_jp: "レッサー・シュートⅤ",
        name_ko: "레서 슛 Ⅴ",
        effect_en: "R-ATK(+35)",
        effect_jp: "射撃力(+35)",
        effect_ko: "사격력(+35)"
    },
    "LT01": {
        name_en: "Lesser Technique I",
        name_jp: "レッサー・テクニックⅠ",
        name_ko: "레서 테크닉 Ⅰ",
        effect_en: "T-ATK(+5)",
        effect_jp: "法撃力(+5)",
        effect_ko: "법격력(+5)"
    },
    "LT02": {
        name_en: "Lesser Technique II",
        name_jp: "レッサー・テクニックⅡ",
        name_ko: "레서 테크닉 Ⅱ",
        effect_en: "T-ATK(+15)",
        effect_jp: "法撃力(+15)",
        effect_ko: "법격력(+15)"
    },
    "LT03": {
        name_en: "Lesser Technique III",
        name_jp: "レッサー・テクニックⅢ",
        name_ko: "레서 테크닉 Ⅲ",
        effect_en: "T-ATK(+25)",
        effect_jp: "法撃力(+25)",
        effect_ko: "법격력(+25)"
    },
    "LT04": {
        name_en: "Lesser Technique IV",
        name_jp: "レッサー・テクニックⅣ",
        name_ko: "레서 테크닉 Ⅳ",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_ko: "법격력(+30)"
    },
    "LT05": {
        name_en: "Lesser Technique V",
        name_jp: "レッサー・テクニックⅤ",
        name_ko: "레서 테크닉 Ⅴ",
        effect_en: "T-ATK(+35)",
        effect_jp: "法撃力(+35)",
        effect_ko: "법격력(+35)"
    },
    "LM01": {
        name_en: "Lesser Stamina I",
        name_jp: "レッサー・スタミナ Ⅰ",
        name_ko: "레서 스태미너 Ⅰ",
        effect_en: "HP(+15)",
        effect_jp: "HP(+15)",
        effect_ko: "HP(+15)"
    },
    "LM02": {
        name_en: "Lesser Stamina II",
        name_jp: "レッサー・スタミナ Ⅱ",
        name_ko: "레서 스태미너 Ⅱ",
        effect_en: "HP(+35)",
        effect_jp: "HP(+35)",
        effect_ko: "HP(+35)"
    },
    "LM03": {
        name_en: "Lesser Stamina III",
        name_jp: "レッサー・スタミナ Ⅲ",
        name_ko: "레서 스태미너 Ⅲ",
        effect_en: "HP(+45)",
        effect_jp: "HP(+45)",
        effect_ko: "HP(+45)"
    },
    "LM04": {
        name_en: "Lesser Stamina IV",
        name_jp: "レッサー・スタミナ Ⅳ",
        name_ko: "레서 스태미너 Ⅳ",
        effect_en: "HP(+55)",
        effect_jp: "HP(+55)",
        effect_ko: "HP(+55)"
    },
    "LM05": {
        name_en: "Lesser Stamina V",
        name_jp: "レッサー・スタミナ Ⅴ",
        name_ko: "레서 스태미너 Ⅴ",
        effect_en: "HP(+65)",
        effect_jp: "HP(+65)",
        effect_ko: "HP(+65)"
    },
    "LR01": {
        name_en: "Lesser Spirita I",
        name_jp: "レッサー・スピリタ Ⅰ",
        name_ko: "레서 스피리타 Ⅰ",
        effect_en: "PP(+1)",
        effect_jp: "PP(+1)",
        effect_ko: "PP(+1)"
    },
    "LR02": {
        name_en: "Lesser Spirita II",
        name_jp: "レッサー・スピリタ Ⅱ",
        name_ko: "레서 스피리타 Ⅱ",
        effect_en: "PP(+2)",
        effect_jp: "PP(+2)",
        effect_ko: "PP(+2)"
    },
    "LR03": {
        name_en: "Lesser Spirita III",
        name_jp: "レッサー・スピリタ Ⅲ",
        name_ko: "레서 스피리타 Ⅲ",
        effect_en: "PP(+3)",
        effect_jp: "PP(+3)",
        effect_ko: "PP(+3)"
    },
    "LR04": {
        name_en: "Lesser Spirita IV",
        name_jp: "レッサー・スピリタ Ⅳ",
        name_ko: "레서 스피리타 Ⅳ",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_ko: "PP(+4)"
    },
    "LR05": {
        name_en: "Lesser Spirita V",
        name_jp: "レッサー・スピリタ Ⅴ",
        name_ko: "레서 스피리타 Ⅴ",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)",
        effect_ko: "PP(+5)"
    },
    "LP06": {
        name_en: "EV Power HP",
        name_jp: "EV・パワーHP",
        name_ko: "EV 파워 HP",
        effect_en: "S-ATK(+35),<br>HP(+60)",
        effect_jp: "打撃力(+35),<br>HP(+60)",
        effect_ko: "타격력(+35),<br>HP(+60)"
    },
    "LP07": {
        name_en: "EV Power PP",
        name_jp: "EV・パワーPP",
        name_ko: "EV 파워 PP",
        effect_en: "S-ATK(+35),<br>PP(+4)",
        effect_jp: "打撃力(+35),<br>PP(+4)",
        effect_ko: "타격력(+35),<br>PP(+4)"
    },
    "LS06": {
        name_en: "EV Shoot HP",
        name_jp: "EV・シュートHP",
        name_ko: "EV 슛 HP",
        effect_en: "R-ATK(+35),<br>HP(+60)",
        effect_jp: "射撃力(+35),<br>HP(+60)",
        effect_ko: "사격력(+35),<br>HP(+60)"
    },
    "LS07": {
        name_en: "EV Shoot PP",
        name_jp: "EV・シュートPP",
        name_ko: "EV 슛 PP",
        effect_en: "R-ATK(+35),<br>PP(+4)",
        effect_jp: "射撃力(+35),<br>PP(+4)",
        effect_ko: "사격력(+35),<br>PP(+4)"
    },
    "LT06": {
        name_en: "EV Technique HP",
        name_jp: "EV・テクニックHP",
        name_ko: "EV 테크닉 HP",
        effect_en: "T-ATK(+35),<br>HP(+60)",
        effect_jp: "法撃力(+35),<br>HP(+60)",
        effect_ko: "법격력(+35),<br>HP(+60)"
    },
    "LT07": {
        name_en: "EV Technique PP",
        name_jp: "EV・テクニックPP",
        name_ko: "EV 테크닉 PP",
        effect_en: "T-ATK(+35),<br>PP(+4)",
        effect_jp: "法撃力(+35),<br>PP(+4)",
        effect_ko: "법격력(+35),<br>PP(+4)"
    },
    "TD01": {
        name_en: "Lovey Fever",
        name_jp: "ラヴィ・フィーバー",
        name_ko: "러비 피버",
        effect_en: "S-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>HP(+10)",
        effect_ko: "타격력(+10),<br>기량(+5),<br>HP(+10)"
    },
    "TD02": {
        name_en: "Egg Fever",
        name_jp: "エグ・フィーバー",
        name_ko: "에그 피버",
        effect_en: "R-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>HP(+10)",
        effect_ko: "사격력(+10),<br>기량(+5),<br>HP(+10)"
    },
    "TD03": {
        name_en: "Frog Fever",
        name_jp: "フログ・フィーバー",
        name_ko: "프로그 피버",
        effect_en: "T-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>HP(+10)",
        effect_ko: "법격력(+10),<br>기량(+5),<br>HP(+10)"
    },
    "TD04": {
        name_en: "Love Fever",
        name_jp: "ラブ・フィーバー",
        name_ko: "러브 피버",
        effect_en: "S-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>PP(+2)",
        effect_ko: "타격력(+10),<br>기량(+5),<br>PP(+2)"
    },
    "TD05": {
        name_en: "St. Fever",
        name_jp: "セント・フィーバー",
        name_ko: "세인트 피버",
        effect_en: "R-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>PP(+2)",
        effect_ko: "사격력(+10),<br>기량(+5),<br>PP(+2)"
    },
    "TD06": {
        name_en: "Latan Fever",
        name_jp: "ラタン・フィーバー",
        name_ko: "라탄 피버",
        effect_en: "T-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>PP(+2)",
        effect_ko: "법격력(+10),<br>기량(+5),<br>PP(+2)"
    },
    "TD07": {
        name_en: "Summer Fever",
        name_jp: "サマー・フィーバー",
        name_ko: "서머 피버",
        effect_en: "T-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "법격력(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)",
        effect_ko: "법격력(+10),<br>기량(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD08": {
        name_en: "Ceremo Fever",
        name_jp: "セレモ・フィーバー",
        name_ko: "세레모 피버",
        effect_en: "S-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "타격력(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)",
        effect_ko: "타격력(+10),<br>기량(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD09": {
        name_en: "Noiya Fever",
        name_jp: "ノイヤ・フィーバー",
        name_ko: "노이야 피버",
        effect_en: "R-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "사격력(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1",
        effect_ko: "사격력(+10),<br>기량(+5),<br>HP(+5),<br>PP(+1"
    },
    "TD0A": {
        name_en: "Torokuro Fever",
        name_jp: "トロクロ・フィーバー",
        name_ko: "토로쿠로 피버",
        effect_en: "DEX(+15),<br>HP(+5),<br>PP(+1)",
        effect_jp: "技量(+15),<br>HP(+5),<br>PP(+1)",
        effect_ko: "기량(+15),<br>HP(+5),<br>PP(+1)"
    },
    "TD0B": {
        name_en: "Sakura Fever",
        name_jp: "サクラ・フィーバー",
        name_ko: "사쿠라 피버",
        effect_en: "S-DEF(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "타격 방어(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)",
        effect_ko: "타격 방어(+10),<br>기량(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0C": {
        name_en: "Sonic Fever",
        name_jp: "ソニック・フィーバー",
        name_ko: "소닉 피버",
        effect_en: "S-ATK(+10),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
        effect_jp: "타격력(+10),<br>射撃防御(+10),<br>HP(+5),<br>PP(+1)",
        effect_ko: "타격력(+10),<br>사격 방어(+10),<br>HP(+5),<br>PP(+1)"
    },
    "TD0D": {
        name_en: "Sansan Fever",
        name_jp: "サンサン・フィーバー",
        name_ko: "산산 피버",
        effect_en: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "타격력(+5),<br>사격력(+5),<br>法撃力(+5),<br>HP(+5),<br>PP(+1)",
        effect_ko: "타격력(+5),<br>사격력(+5),<br>법격력(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0E": {
        name_en: "Luna Fever",
        name_jp: "ルーナ・フィーバー",
        name_ko: "루나 피버",
        effect_en: "T-ATK(+10),<br>HP(+10),<br>PP(+1)",
        effect_jp: "法撃力(+10),<br>HP(+10),<br>PP(+1)",
        effect_ko: "법격력(+10),<br>HP(+10),<br>PP(+1)"
    },
    "TD0F": {
        name_en: "ARKS Fever",
        name_jp: "アクス・フィーバー",
        name_ko: "아크스 피버",
        effect_en: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>DEX(+5),<br>PP(+5)",
        effect_jp: "타격력(+5),<br>사격력(+5),<br>法撃力(+5),<br>技量(+5),<br>PP(+5)",
        effect_ko: "타격력(+5),<br>사격력(+5),<br>법격력(+5),<br>기량(+5),<br>PP(+5)"
    },
    "UA01": {
        name_en: "Flict Arma",
        name_jp: "フリクト・アルマ",
        name_ko: "플릭트 알마",
        effect_en: "S-ATK(+20),<br>PP(+3)",
        effect_jp: "打撃力(+20),<br>PP(+3)",
        effect_ko: "타격력(+20),<br>PP(+3)"
    },
    "UA11": {
        name_en: "Flict Tiro",
        name_jp: "フリクト・ティロ",
        name_ko: "플릭트 티로",
        effect_en: "R-ATK(+20),<br>PP(+3)",
        effect_jp: "射撃力(+20),<br>PP(+3)",
        effect_ko: "사격력(+20),<br>PP(+3)"
    },
    "UA21": {
        name_en: "Flict Magia",
        name_jp: "フリクト・マギア",
        name_ko: "플릭트 마기아",
        effect_en: "T-ATK(+20),<br>PP(+3)",
        effect_jp: "法撃力(+20),<br>PP(+3)",
        effect_ko: "법격력(+20),<br>PP(+3)"
    },
    "UB01": {
        name_en: "Alter Arma",
        name_jp: "アルター・アルマ",
        name_ko: "알터 알마",
        effect_en: "S-ATK(+20),<br>HP(+30)",
        effect_jp: "打撃力(+20),<br>HP(+30)",
        effect_ko: "타격력(+20),<br>HP(+30)"
    },
    "UB11": {
        name_en: "Alter Tiro",
        name_jp: "アルター・ティロ",
        name_ko: "알터 티로",
        effect_en: "R-ATK(+20),<br>HP(+30)",
        effect_jp: "射撃力(+20),<br>HP(+30)",
        effect_ko: "사격력(+20),<br>HP(+30)"
    },
    "UB21": {
        name_en: "Alter Magia",
        name_jp: "アルター・マギア",
        name_ko: "알터 마기아",
        effect_en: "T-ATK(+20),<br>HP(+30)",
        effect_jp: "法撃力(+20),<br>HP(+30)",
        effect_ko: "법격력(+20),<br>HP(+30)"
    },
    "UC01": {
        name_en: "Mark Joyo",
        name_jp: "マーク・ジョイオ",
        name_ko: "마크 죠이오",
        effect_en: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+50)",
        effect_jp: "타격력(+40),<br>사격력(+40),<br>法撃力(+40),<br>HP(+50)",
        effect_ko: "타격력(+40),<br>사격력(+40),<br>법격력(+40),<br>HP(+50)"
    },
    "UC11": {
        name_en: "Mark Couragena",
        name_jp: "マーク・カレジナ",
        name_ko: "마크 카레지나",
        effect_en: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)",
        effect_jp: "타격력(+40),<br>射撃力(+40),<br>法撃力(+40),<br>PP(+5)",
        effect_ko: "타격력(+40),<br>사격력(+40),<br>법격력(+40),<br>PP(+5)"
    },
    "UC21": {
        name_en: "Mark Angar",
        name_jp: "マーク・アンガル",
        name_ko: "마크 앙갈",
        effect_en: "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)",
        effect_jp: "타격력(+50),<br>사격력(+50),<br>法撃力(+50),<br>技量(+40)",
        effect_ko: "타격력(+50),<br>사격력(+50),<br>법격력(+50),<br>기량(+40)"
    },
    "UC31": {
        name_en: "Mark Grif",
        name_jp: "マーク・グリフ",
        name_ko: "마크 그리프",
        effect_en: "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)",
        effect_jp: "타격 방어(+50),<br>사격 방어(+50),<br>法撃防御(+50),<br>HP(+80)",
        effect_ko: "타격 방어(+50),<br>사격 방어(+50),<br>법격 방어(+50),<br>HP(+80)"
    },
    "ID01": {
        name_en: "Divine Will",
        name_jp: "ディバインウィル",
        name_ko: "디바인 윌",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), PP(+5)",
        effect_jp: "타격력(+20),射撃力(+20),法撃力(+20),PP(+5)",
        effect_ko: "타격력(+20),사격력(+20),법격력(+20),PP(+5)"
    },
    "ID02": {
        name_en: "Divine Order",
        name_jp: "ディバイン・オーダー",
        name_ko: "디바인 오더",
        effect_en: "S-ATK(+50), R-ATK(+50), T-ATK(+50), HP(+20), PP(+10)",
        effect_jp: "타격력(+50),사격력(+50),法撃力(+50),HP(+20),PP(+10)",
        effect_ko: "타격력(+50),사격력(+50),법격력(+50),HP(+20),PP(+10)"
    },
    "IE01": {
        name_en: "Exceed Energy",
        name_jp: "イクシード・エナジー",
        name_ko: "익시드 에너지",
        effect_en: "S-ATK(+50), R-ATK(+50), T-ATK(+50), DEX(+20), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+5)",
        effect_jp: "타격력(+50),사격력(+50),법격력(+50),기량(+20),타격 방어(+20),사격 방어(+20),法撃防御(+20),HP(+20),PP(+5)",
        effect_ko: "타격력(+50),사격력(+50),법격력(+50),기량(+20),타격 방어(+20),사격 방어(+20),법격 방어(+20),HP(+20),PP(+5)"
    },
    "YA01": {
        name_en: "Sentence Power",
        name_jp: "センテンス・パワー",
        name_ko: "센텐스 파워",
        effect_en: "S-ATK(+20),<br>PP(+4)",
        effect_jp: "打撃力(+20),<br>PP(+4)",
        effect_ko: "타격력(+20),<br>PP(+4)"
    },
    "YA05": {
        name_en: "Sentence Arma",
        name_jp: "センテンス・アルマ",
        name_ko: "센텐스 알마",
        effect_en: "S-ATK(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "打撃力(+20),<br>HP(+20),<br>PP(+3)",
        effect_ko: "타격력(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA11": {
        name_en: "Sentence Shoot",
        name_jp: "センテンス・シュート",
        name_ko: "센텐스 슛",
        effect_en: "R-ATK(+20),<br>PP(+4)",
        effect_jp: "射撃力(+20),<br>PP(+4)",
        effect_ko: "사격력(+20),<br>PP(+4)"
    },
    "YA15": {
        name_en: "Sentence Tiro",
        name_jp: "センテンス・ティロ",
        name_ko: "센텐스 티로",
        effect_en: "R-ATK(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "射撃力(+20),<br>HP(+20),<br>PP(+3)",
        effect_ko: "사격력(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA21": {
        name_en: "Sentence Tech",
        name_jp: "センテンス・テクニック",
        name_ko: "센텐스 테크닉",
        effect_en: "T-ATK(+20),<br>PP(+4)",
        effect_jp: "法撃力(+20),<br>PP(+4)",
        effect_ko: "법격력(+20),<br>PP(+4)"
    },
    "YA25": {
        name_en: "Sentence Magia",
        name_jp: "センテンス・マギア",
        name_ko: "센텐스 마기아",
        effect_en: "T-ATK(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "法撃力(+20),<br>HP(+20),<br>PP(+3)",
        effect_ko: "법격력(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA31": {
        name_en: "Sentence Triple",
        name_jp: "センテンス・テクニック",
        name_ko: "센텐스 트리플",
        effect_en: "S-ATK(+30),R-ATK(+30),T-ATK(+30)",
        effect_jp: "打撃力(+30),射撃力(+30),法撃力(+30)",
        effect_ko: "타격력(+30),사격력(+30),법격력(+30)"
    },
    "YB41": {
        name_en: "Phrase Reduce",
        name_jp: "フレイズ・リデュース",
        name_ko: "프레이즈 리듀스",
        effect_en: "PP consumption decreases by 4%.",
        effect_jp: "PP消費量-4%。",
        effect_ko: "PP消費量-4%。"
    },
    "YB51": {
        name_en: "Phrase Decay",
        name_jp: "フレイズ・ディケイ",
        name_ko: "프레이즈 디케이",
        effect_en: "Boosts damage inflicted to enemies<br>affected by Jellen by 5%.",
        effect_jp: "ジェルン状態の敵への威力+5%。",
        effect_ko: "ジェルン状態の敵への威力+5%。"
    },
    "YB01": {
        name_en: "Phrase Recovery",
        name_jp: "フレイズ・レスポンス",
        name_ko: "프레이즈 리커버리",
        effect_en: "+5% PP Recovery Rate.",
        effect_jp: "攻撃時PP回復+5%。",
        effect_ko: "攻撃時PP回復+5%。"
    },
    "YB11": {
        name_en: "Phrase Weak",
        name_jp: "フレイズ・ウィーク",
        name_ko: "프레이즈 위크",
        effect_en: "+2% Elemental Weakness damage.",
        effect_jp: "弱点属性威力+2%。",
        effect_ko: " 속성 약점属性威力+2%。"
    },
    "YB21": {
        name_en: "Phrase Response",
        name_jp: "フレイズ・レスポンス",
        name_ko: "프레이즈 리스폰스",
        effect_en: "+5% ATK PP Recovery.",
        effect_jp: "攻撃時PP回復+5%。",
        effect_ko: "攻撃時PP回復+5%。"
    },
    "YB31": {
        name_en: "Phrase Chase",
        name_jp: "フレイズ・チェイス",
        name_ko: "프레이즈 체이스",
        effect_en: "+5% damage against enemies with Status Effects.",
        effect_jp: "状態異常の敵への威力+5%。",
        effect_ko: "状態異常の敵への威力+5%。"
    },
    "VA01": {
        name_en: "Lucky Rise I",
        name_jp: "ラッキーライズ Ⅰ",
        name_ko: "럭키 라이즈 Ⅰ",
        effect_en: "Item Drop Rate +5%.",
        effect_jp: "レアドロップ倍率が増加を5％。",
        effect_ko: "レアドロップ倍率が増加を5％。"
    },
    "VA02": {
        name_en: "Lucky Rise II",
        name_jp: "ラッキーライズ Ⅱ",
        name_ko: "럭키 라이즈 Ⅱ",
        effect_en: "Item Drop Rate +7%.",
        effect_jp: "レアドロップ倍率が増加を7％。",
        effect_ko: "レアドロップ倍率が増加を7％。"
    },
    "VA03": {
        name_en: "Lucky Rise III",
        name_jp: "ラッキーライズ Ⅲ",
        name_ko: "럭키 라이즈 Ⅲ",
        effect_en: "Item Drop Rate +10%.",
        effect_jp: "レアドロップ倍率が増加を10％。",
        effect_ko: "レアドロップ倍率が増加を10％。"
    },
    "VB01": {
        name_en: "Meseta Fever I",
        name_jp: "メセタフィーバー Ⅰ",
        name_ko: "메세타 피버 Ⅰ",
        effect_en: "Meseta Drop Amount +5%.",
        effect_jp: "メセタドロップ率が5％増加。",
        effect_ko: "メセタドロップ率が5％増加。"
    },
    "VZ02": {
        name_en: "Meseta Fever II",
        name_jp: "メセタフィーバー Ⅱ",
        name_ko: "메세타 피버 Ⅱ",
        effect_en: "Meseta Drop Amount +10%.",
        effect_jp: "メセタドロップ率が10％増加。",
        effect_ko: "メセタドロップ率が10％増加。"
    },
    "VB03": {
        name_en: "Meseta Fever III",
        name_jp: "メセタフィーバー Ⅲ",
        name_ko: "메세타 피버 Ⅲ",
        effect_en: "Meseta Drop Amount +15%.",
        effect_jp: "メセタドロップ率が15％増加。",
        effect_ko: "メセタドロップ率が15％増加。"
    },
    "VC01": {
        name_en: "EXP Boost I",
        name_jp: "ＥＸＰブースト Ⅰ",
        name_ko: "EXP 부스트 Ⅰ",
        effect_en: "Experience Gain +5%.",
        effect_jp: "取得する経験値が増加を5％。",
        effect_ko: "取得する経験値が増加を5％。"
    },
    "VC02": {
        name_en: "EXP Boost II",
        name_jp: "ＥＸＰブースト Ⅱ",
        name_ko: "EXP 부스트 Ⅱ",
        effect_en: "Experience Gain +7%.",
        effect_jp: "取得する経験値が増加を7％。",
        effect_ko: "取得する経験値が増加を7％。"
    },
    "VC03": {
        name_en: "EXP Boost III",
        name_jp: "ＥＸＰブースト Ⅲ",
        name_ko: "EXP 부스트 Ⅲ",
        effect_en: "Experience Gain +10%.",
        effect_jp: "取得する経験値が増加を10％。",
        effect_ko: "取得する経験値が増加を10％。"
    },
    "VD01": {
        name_en: "Temptation",
        name_jp: "テンプテーション",
        name_ko: "템테이션",
        effect_en: "Item Drop Rate +10%.",
        effect_jp: "レアドロップ倍率が増加を10％。",
        effect_ko: "レアドロップ倍率が増加を10％。"
    },
    "VE01": {
        name_en: "Another History",
        name_jp: "アナザーヒストリー",
        name_ko: "어나더 히스토리",
        effect_en: "Experience Gain +10%.",
        effect_jp: "取得する経験値が増加を10％。",
        effect_ko: "取得する経験値が増加を10％。"
    },
    "VF01": {
        name_en: "Fresh Sign",
        name_jp: "フレッシュ・サイン",
        name_ko: "프레쉬 사인",
        effect_en: "Boost EXP by 30% until Lv30.",
        effect_jp: "Lv30に到達するまで取得する経験値が増加するを30％。",
        effect_ko: "Lv30に到達するまで取得する経験値が増加するを30％。"
    },
    "VH01": {
        name_en: "Ultimate Buster",
        name_jp: "アルティメットバスター",
        name_ko: "울티메이트 버스터",
        effect_en: "Boost damage in Ultimate +10%.",
        effect_jp: "世壊種エネミーに与えるダメージが10%上昇。",
        effect_ko: "世壊種エネミーに与えるダメージが10%上昇。"
    },
    "VH11": {
        name_en: "Omega Buster",
        name_jp: "オメガバスター",
        name_ko: "오메가 버스터",
        effect_en: "Boosts damage against Demons by 3%.",
        effect_jp: "魔物へのダメージは10％増加する。",
        effect_ko: "魔物へのダメージは10％増加する。"
    },
    "PA01": {
        name_en: "Ripper/Ltn. Weak",
        name_jp: "リーパー／雷弱点",
        name_ko: "리퍼 / 뇌 속성 약점",
        effect_en: "Boost damage against enemies weak to Lightning. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "雷 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "雷 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PB02": {
        name_en: "Ripper/Fire Weak",
        name_jp: "リーパー／火弱点",
        name_ko: "리퍼 / 염 속성 약점",
        effect_en: "Boost damage against enemies weak to Fire. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "火 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "火 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PC03": {
        name_en: "Ripper/Ice Weak",
        name_jp: "リーパー／氷弱点",
        name_ko: "리퍼 / 빙 속성 약점",
        effect_en: "Boost damage against enemies weak to Ice. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "氷 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "氷 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PD04": {
        name_en: "Ripper/Wind Weak",
        name_jp: "リーパー／風弱点",
        name_ko: "리퍼 / 풍 속성 약점",
        effect_en: "Boost damage against enemies weak to Wind. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "風 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "風 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PE05": {
        name_en: "Ripper/Light Weak",
        name_jp: "リーパー／光弱点",
        name_ko: "리퍼 / 광 속성 약점",
        effect_en: "Boost damage against enemies weak to Light. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "光 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "光 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PF06": {
        name_en: "Ripper/Dark Weak",
        name_jp: "リーパー／闇弱点",
        name_ko: "리퍼 / 암 속성 약점",
        effect_en: "Boost damage against enemies weak to Dark. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "闇 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "闇 속성 약점のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "VQ01": {
        name_en: "Slayer/Armor Type",
        name_jp: "スレイヤー／機甲種",
        name_ko: "슬레이어 / 기갑종",
        effect_en: "Boost damage against Lillipa Mechs. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "機甲種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "機甲種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "VQ02": {
        name_en: "Slayer/Beast Type",
        name_jp: "スレイヤー／野獣種",
        name_ko: "슬레이어 / 원생종",
        effect_en: "Boost damage against Naberius Natives. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "野獣種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "野獣種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PJ13": {
        name_en: "Slayer/Ocean Type",
        name_jp: "スレイヤー／海王種",
        name_ko: "슬레이어 / 해왕종",
        effect_en: "Boost damage against Oceanids. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "해왕종のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "해왕종のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PK14": {
        name_en: "Slayer/Kuronite Type",
        name_jp: "スレイヤー／黒の民",
        name_ko: "슬레이어 / 흑의 주민",
        effect_en: "Boost damage against Kuronites. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "흑의 주민のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "흑의 주민のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PL15": {
        name_en: "Slayer/Phantoms Type",
        name_jp: "スレイヤー／幻創種",
        name_ko: "슬레이어 / 환창종",
        effect_en: "Boost damage against Phantoms. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "환창종のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "환창종のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PM16": {
        name_en: "Slayer/Darkers",
        name_jp: "スレイヤー／ダーカー",
        name_ko: "슬레이어 / 다커",
        effect_en: "Boost damage against Darkers. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "다커種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "다커種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PN17": {
        name_en: "Slayer/Dragonkin",
        name_jp: "スレイヤー／龍族種",
        name_ko: "슬레이어 / 용족",
        effect_en: "Boost damage against Dragonkin. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "용족のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "용족のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PO18": {
        name_en: "Slayer/Luminmech",
        name_jp: "スレイヤー／閃機種",
        name_ko: "슬레이어 / 섬기종",
        effect_en: "Boost damage against Luminmech. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "섬기종のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_ko: "섬기종のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "VJ01": {
        name_en: "Soul Catalyst",
        name_jp: "ソール・カタリスト",
        name_ko: "소울 카탈리스트",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_ko: "HP(+10),<br>PP(+1)"
    },
    "VJ02": {
        name_en: "Factor Catalyst",
        name_jp: "ファクター・カタリスト",
        name_ko: "팩터 카탈리스트",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_ko: "HP(+10),<br>PP(+1)"
    },
    "VJ03": {
        name_en: "Reverie Catalyst",
        name_jp: "レヴリー・カタリスト",
        name_ko: "레브리 카탈리스트",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_ko: "HP(+10),<br>PP(+1)"
    },
    "VK03": {
        name_en: "Polytan Smile",
        name_jp: "ポリタン・スマイル",
        name_ko: "폴리탄 스마일",
        effect_en: "Adds 25 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が25増加する。",
        effect_ko: "新世武器強化時の経験値が25増加する。"
    },
    "VK04": {
        name_en: "Arkuma Smile",
        name_jp: "アークマ・スマイル",
        name_ko: "아쿠마 스마일",
        effect_en: "Adds 25 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が25増加する。",
        effect_ko: "新世武器強化時の経験値が25増加する。"
    },
    "VK01": {
        name_en: "Emper Embrace",
        name_jp: "エンぺ・エンブレイス",
        name_ko: "엔페 엠브레이스",
        effect_en: "Adds 90 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が90増加する。",
        effect_ko: "新世武器強化時の経験値が90増加する。"
    },
    "VO01": {
        name_en: "Guidance Trainer",
        name_jp: "錬成の導き",
        name_ko: "연성의 인도",
        effect_en: "Increase Special Ability Addition success rate by 5%.",
        effect_jp: "特殊能力の成功率を5％上昇させる。",
        effect_ko: "특수 능력の成功率を5％上昇させる。"
    },
    "VK05": {
        name_en: "NT Weapon Booster",
        name_jp: "ＮＴウェポンブースト",
        name_ko: "NT 웨폰 부스트",
        effect_en: "Adds 800 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が800増加する。",
        effect_ko: "新世武器強化時の経験値が800増加する。"
    },
    "WA01": {
        name_en: "Photon Collect",
        name_jp: "フォトンコレクト",
        name_ko: "포톤 콜렉트",
        effect_en: "Boosts status effect affix rate.",
        effect_jp: "状態異常系特殊能力のランクアップ時に成功率を上昇させる。",
        effect_ko: "状態異常系특수 능력のランクアップ時に成功率を上昇させる。"
    },
    "XA01": {
        name_en: "Soul Receptor",
        name_jp: "ソールレセプター",
        name_ko: "소울 리셉터",
        effect_en: "Greatly increases Soul affix rate.",
        effect_jp: "ソール系特殊能力の合成成功率を大幅に上昇。",
        effect_ko: "ソール系특수 능력の合成成功率を大幅に上昇。"
    },
    "XB01": {
        name_en: "Extreceptor",
        name_jp: "エクストレセプター",
        name_ko: "엑스트 리셉터",
        effect_en: "Greatly increases Flict and Alter affix rate.<br>ALL(+10)",
        effect_jp: "アルター・フリクト系と特定の特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_ko: "アルター・フリクト系と特定の특수 능력の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XC01": {
        name_en: "Gift Receptor",
        name_jp: "ギフトレセプター",
        name_ko: "기프트 리셉터",
        effect_en: "Allows transfer of Lucky Rise, EXP Boost, and Meseta Fever.",
        effect_jp: "ギフト系特殊能力の引き継ぎが可能になる",
        effect_ko: "ギフト系특수 능력の引き継ぎが可能になる"
    },
    "XD01": {
        name_en: "Sentence Receptor",
        name_jp: "センテンスレセプター",
        name_ko: "센텐스 리셉터",
        effect_en: "Boosts transfer of Sentence affixes.<br>ALL(+10)",
        effect_jp: "센텐스 系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_ko: "센텐스 系특수 능력の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XE01": {
        name_en: "Phrase Receptor",
        name_jp: "フレイズレセプター",
        name_ko: "프레이즈 리셉터",
        effect_en: "Boosts transfer of Phrase affixes.<br>ALL(+10)",
        effect_jp: "フレイズ系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_ko: "フレイズ系특수 능력の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XF01": {
        name_en: "Factor Receptor",
        name_jp: "ファクターレセプター",
        name_ko: "팩터 리셉터",
        effect_en: "Boosts Factor-type ability transfer rates.<br>ALL(+10)",
        effect_jp: "ファクター系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_ko: "ファクター系특수 능력の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XG01": {
        name_en: "Mark Receptor",
        name_jp: "マークレセプター",
        name_ko: "마크 리셉터",
        effect_en: "Allows transfer Mark-type ability.<br>ALL(+10)",
        effect_jp: "マーク系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_ko: "マーク系특수 능력の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XJ01": {
        name_en: "Divine Receptor",
        name_jp: "ディバインレセプター",
        name_ko: "디바인 리셉터",
        effect_en: "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)",
        effect_jp: "ディバイン系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_ko: "ディバイン系특수 능력の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XH01": {
        name_en: "Catalyst Receptor",
        name_jp: "カタリストレセプター",
        name_ko: "카탈리스트 리셉터",
        effect_en: "Greatly increases affix rate of Catalyst-type ability.<br>ALL(+10)",
        effect_jp: "カタリスト系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_ko: "カタリスト系특수 능력の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XI30": {
        name_en: "Attack Receptor",
        name_jp: "アタックレセプター",
        name_ko: "어택 리셉터",
        effect_en: "Greatly increases affix rate of Power, Shoot, Technique, and Arm.<br>ALL(+5)",
        effect_jp: "파워・슛・テクニック系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)",
        effect_ko: "파워・슛・테크닉系특수 능력の合成成功率を大幅に上昇。<br>ALL(+5)"
    },
    "XI31": {
        name_en: "Guard Receptor",
        name_jp: "ガードレセプター",
        name_ko: "가드 리셉터",
        effect_en: "Greatly increases affix rate of Mind, Body, and React.<br>ALL(+5)",
        effect_jp: "마인드・바디・リアクト系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)",
        effect_ko: "마인드・바디・리액트系특수 능력の合成成功率を大幅に上昇。<br>ALL(+5)"
    },
    "XI32": {
        name_en: "Photon Receptor",
        name_jp: "フォトンレセプター",
        name_ko: "포톤 리셉터",
        effect_en: "Greatly increases affix rate of Stamina and Spirita.<br>ALL(+5)",
        effect_jp: "스태미너・スピリタ系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)",
        effect_ko: "스태미너・스피리타系특수 능력の合成成功率を大幅に上昇。<br>ALL(+5)"
    },
    "XI02": {
        name_en: "Stamina Boost",
        name_jp: "スタミナ・ブースト",
        name_ko: "스태미너 부스트",
        effect_en: "HP(+45)",
        effect_jp: "HP(+45)",
        effect_ko: "HP(+45)"
    },
    "XI03": {
        name_en: "Spirita Boost",
        name_jp: "スピリタ・ブースト",
        name_ko: "스피리타 부스트",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)",
        effect_ko: "PP(+5)"
    },
    "XI04": {
        name_en: "Power Boost",
        name_jp: "パワー・ブースト",
        name_ko: "파워 부스트",
        effect_en: "S-ATK(+25)",
        effect_jp: "打撃力(+25)",
        effect_ko: "타격력(+25)"
    },
    "XI05": {
        name_en: "Shoot Boost",
        name_jp: "シュート・ブースト",
        name_ko: "슛 부스트",
        effect_en: "R-ATK(+25)",
        effect_jp: "射撃力(+25)",
        effect_ko: "사격력(+25)"
    },
    "XI06": {
        name_en: "Technique Boost",
        name_jp: "テクニック・ブースト",
        name_ko: "테크닉 부스트",
        effect_en: "T-ATK(+25)",
        effect_jp: "法撃力(+25)",
        effect_ko: "법격력(+25)"
    },
    "XI0a": {
        name_en: "Tenora Boost",
        name_jp: "テノラ・ブースト",
        name_ko: "테노라 부스트",
        effect_en: "S-ATK(+35)",
        effect_jp: "打撃力(+35)",
        effect_ko: "타격력(+35)"
    },
    "XI0b": {
        name_en: "GRM Boost",
        name_jp: "ＧＲＭ・ブースト",
        name_ko: "GRM 부스트",
        effect_en: "R-ATK(+35)",
        effect_jp: "射撃力(+35)",
        effect_ko: "사격력(+35)"
    },
    "XI0c": {
        name_en: "Yohmei Boost",
        name_jp: "ヨウメイ・ブースト",
        name_ko: "요우메이 부스트",
        effect_en: "T-ATK(+35)",
        effect_jp: "法撃力(+35)",
        effect_ko: "법격력(+35)"
    },
    "XI10": {
        name_en: "Noble Stamina",
        name_jp: "ノーブル・スタミナ",
        name_ko: "노블 스태미너",
        effect_en: "HP(+50),PP(+3)",
        effect_jp: "HP(+50),PP(+3)",
        effect_ko: "HP(+50),PP(+3)"
    },
    "XI14": {
        name_en: "Elegant Stamina",
        name_jp: "エレガント・スタミナ",
        name_ko: "엘레강트 스태미너",
        effect_en: "HP(+70),PP(+4)",
        effect_jp: "HP(+70),PP(+4)",
        effect_ko: "HP(+70),PP(+4)"
    },
    "XI51": {
        name_en: "Grace Stamina",
        name_jp: "グレース・スタミナ",
        name_ko: "그레이스 스태미너",
        effect_en: "HP(+80),PP(+5)",
        effect_jp: "HP(+80),PP(+5)",
        effect_ko: "HP(+80),PP(+5)"
    },
    "XI61": {
        name_en: "Grand Stamina",
        name_jp: "グランド・スタミナ",
        name_ko: "그랜드 스태미너",
        effect_en: "HP(+100),PP(+6)",
        effect_jp: "HP(+100),PP(+6)",
        effect_ko: "HP(+100),PP(+6)"
    },
    "XI07": {
        name_en: "Noble Power",
        name_jp: "ノーブル・パワー",
        name_ko: "노블 파워",
        effect_en: "S-ATK(+30),PP(+3)",
        effect_jp: "打撃力(+30),PP(+3)",
        effect_ko: "타격력(+30),PP(+3)"
    },
    "XI11": {
        name_en: "Elegant Power",
        name_jp: "エレガント・パワー",
        name_ko: "엘레강트 파워",
        effect_en: "S-ATK(+40),PP(+4)",
        effect_jp: "打撃力(+40),PP(+4)",
        effect_ko: "타격력(+40),PP(+4)"
    },
    "XI52": {
        name_en: "Grace Power",
        name_jp: "グレース・パワー",
        name_ko: "그레이스 파워",
        effect_en: "S-ATK(+50),PP(+5)",
        effect_jp: "打撃力(+50),PP(+5)",
        effect_ko: "타격력(+50),PP(+5)"
    },
    "XI62": {
        name_en: "Grand Power",
        name_jp: "グランド・パワー",
        name_ko: "그랜드 파워",
        effect_en: "S-ATK(+60),HP(+20),PP(+5)",
        effect_jp: "打撃力(+60),HP(+20),PP(+5)",
        effect_ko: "타격력(+60),HP(+20),PP(+5)"
    },
    "XI08": {
        name_en: "Noble Shoot",
        name_jp: "ノーブル・シュート",
        name_ko: "노블 슛",
        effect_en: "R-ATK(+30),PP(+3)",
        effect_jp: "射撃力(+30),PP(+3)",
        effect_ko: "사격력(+30),PP(+3)"
    },
    "XI12": {
        name_en: "Elegant Shoot",
        name_jp: "エレガント・シュート",
        name_ko: "엘레강트 슛",
        effect_en: "R-ATK(+40),PP(+4)",
        effect_jp: "射撃力(+40),PP(+4)",
        effect_ko: "사격력(+40),PP(+4)"
    },
    "XI53": {
        name_en: "Grace Shoot",
        name_jp: "グレース・シュート",
        name_ko: "그레이스 슛",
        effect_en: "R-ATK(+50),PP(+5)",
        effect_jp: "射撃力(+50),PP(+5)",
        effect_ko: "사격력(+50),PP(+5)"
    },
    "XI63": {
        name_en: "Grand Shoot",
        name_jp: "グランド・シュート",
        name_ko: "그랜드 슛",
        effect_en: "R-ATK(+60),HP(+20),PP(+5)",
        effect_jp: "射撃力(+60),HP(+20),PP(+5)",
        effect_ko: "사격력(+60),HP(+20),PP(+5)"
    },
    "XI09": {
        name_en: "Noble Technique",
        name_jp: "ノーブル・テクニック",
        name_ko: "노블 테크닉",
        effect_en: "T-ATK(+30),PP(+3)",
        effect_jp: "法撃力(+30),PP(+3)",
        effect_ko: "법격력(+30),PP(+3)"
    },
    "XI13": {
        name_en: "Elegant Technique",
        name_jp: "エレガント・テクニック",
        name_ko: "엘레강트 테크닉",
        effect_en: "T-ATK(+40),PP(+4)",
        effect_jp: "法撃力(+40),PP(+4)",
        effect_ko: "법격력(+40),PP(+4)"
    },
    "XI54": {
        name_en: "Grace Technique",
        name_jp: "グレース・テクニック",
        name_ko: "그레이스 테크닉",
        effect_en: "T-ATK(+50),PP(+5)",
        effect_jp: "法撃力(+50),PP(+5)",
        effect_ko: "법격력(+50),PP(+5)"
    },
    "XI64": {
        name_en: "Grand Technique",
        name_jp: "グランド・テクニック",
        name_ko: "그랜드 테크닉",
        effect_en: "T-ATK(+60),HP(+20),PP(+5)",
        effect_jp: "法撃力(+60),HP(+20),PP(+5)",
        effect_ko: "법격력(+60),HP(+20),PP(+5)"
    },
    "XI60": {
        name_en: "Grand Spirita",
        name_jp: "グランド・スピリタ",
        name_ko: "그랜드 스피리타",
        effect_en: "PP(+15)",
        effect_jp: "PP(+15)",
        effect_ko: "PP(+15)"
    },
    "XI20": {
        name_en: "Offense Boost",
        name_jp: "オフェンス・ブースト",
        name_ko: "오펜스 부스트",
        effect_en: "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)",
        effect_jp: "타격력(+15),射撃力(+15),法撃力(+15),技量(+25),PP(+1)",
        effect_ko: "타격력(+15),사격력(+15),법격력(+15),기량(+25),PP(+1)"
    },
    "XI22": {
        name_en: "Attack Boost",
        name_jp: "アタックブースト",
        name_ko: "어택 부스트",
        effect_en: "S-ATK(+25),R-ATK(+25),T-ATK(+25),DEX(+40),PP(+3)",
        effect_jp: "타격력(+25),射撃力(+25),法撃力(+25),技量(+40),PP(+3)",
        effect_ko: "타격력(+25),사격력(+25),법격력(+25),기량(+40),PP(+3)"
    },
    "XI21": {
        name_en: "Defense Boost",
        name_jp: "ディフェンス・ブースト",
        name_ko: "디펜스 부스트",
        effect_en: "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)",
        effect_jp: "타격 방어(+25),사격 방어(+25),法撃防御(+25),HP(+55),PP(+1)",
        effect_ko: "타격 방어(+25),사격 방어(+25),법격 방어(+25),HP(+55),PP(+1)"
    },
    "XI23": {
        name_en: "Guard Boost",
        name_jp: "ガードブースト",
        name_ko: "가드 부스트",
        effect_en: "S-DEF(+35),R-DEF(+35),T-DEF(+35),HP(+75),PP(+3)",
        effect_jp: "타격 방어(+35),사격 방어(+35),法撃防御(+35),HP(+75),PP(+3)",
        effect_ko: "타격 방어(+35),사격 방어(+35),법격 방어(+35),HP(+75),PP(+3)"
    },
    "ZA01": {
        name_en: "Junk A",
        name_jp: "ジャンクA",
        name_ko: "정크 A",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZB01": {
        name_en: "Junk B",
        name_jp: "ジャンクB",
        name_ko: "정크 B",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZC01": {
        name_en: "Junk C",
        name_jp: "ジャンクC",
        name_ko: "정크 C",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZD01": {
        name_en: "Junk D",
        name_jp: "ジャンクD",
        name_ko: "정크 D",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZE01": {
        name_en: "Junk E",
        name_jp: "ジャンクE",
        name_ko: "정크 E",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZF01": {
        name_en: "Junk F",
        name_jp: "ジャンクF",
        name_ko: "정크 F",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZG01": {
        name_en: "Junk G",
        name_jp: "ジャンクG",
        name_ko: "정크 G",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZH01": {
        name_en: "Junk H",
        name_jp: "ジャンクH",
        name_ko: "정크 H",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "ZI01": {
        name_en: "Junk I",
        name_jp: "ジャンクI",
        name_ko: "정크 I",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_ko: "100％合成成功率の정크 。"
    },
    "LA99": {
        name_en: "S1:Junk",
        name_jp: "S1:ジャンク",
        name_ko: "S1:정크 ",
        effect_en: "Represents any S1 ability.",
        effect_jp: "任意のS1能力を表します。",
        effect_ko: "任意のS1能力を表します。"
    },
    "LB99": {
        name_en: "S2:Junk",
        name_jp: "S2:ジャンク",
        name_ko: "S2:정크 ",
        effect_en: "Represents any S2 ability.",
        effect_jp: "任意のS2能力を表します。",
        effect_ko: "任意のS2能力を表します。"
    },
    "LC99": {
        name_en: "S3:Junk",
        name_jp: "S3:ジャンク",
        name_ko: "S3:정크 ",
        effect_en: "Represents any S3 ability.",
        effect_jp: "任意のS3能力を表します。",
        effect_ko: "任意のS3能力を表します。"
    },
    "LD99": {
        name_en: "S4:Junk",
        name_jp: "S4:ジャンク",
        name_ko: "S4:정크 ",
        effect_en: "Represents any S4 ability.",
        effect_jp: "任意のS4能力を表します。",
        effect_ko: "任意のS4能力を表します。"
    },
    "LE99": {
        name_en: "S5:Junk",
        name_jp: "S5:ジャンク",
        name_ko: "S5:정크 ",
        effect_en: "Represents any S5 ability.",
        effect_jp: "任意のS5能力を表します。",
        effect_ko: "任意のS5能力を表します。"
    },
    "LF99": {
        name_en: "S6:Junk",
        name_jp: "S6:ジャンク",
        name_ko: "S6:정크 ",
        effect_en: "Represents any S6 ability.",
        effect_jp: "任意のS6能力を表します。",
        effect_ko: "任意のS6能力を表します。"
    },
    "LG99": {
        name_en: "S7:Junk",
        name_jp: "S7:ジャンク",
        name_ko: "S7:정크 ",
        effect_en: "Represents any S7 ability.",
        effect_jp: "任意のS7能力を表します。",
        effect_ko: "任意のS7能力を表します。"
    },
    "LH99": {
        name_en: "S8:Junk",
        name_jp: "S8:ジャンク",
        name_ko: "S8:정크 ",
        effect_en: "Represents any S8 ability.",
        effect_jp: "任意のS8能力を表します。",
        effect_ko: "任意のS8能力を表します。"
    }
});

var module = module || undefined
if (module && module.exports) {
    module.exports.lang = lang
}
