const personalProjects = [
    {   name: "Pyno",
        descriptionName: "History of Facebook messages App on Android",
        content: [
            "Give Facebook users box to explore old conversations by inputting date or searched message text without infinite scrolling up, also reveal first message.",
            "Build requesting of hidden parameters of date or text or distance of number messages and nessesary token extracted from response by injecting javascript block to webview then pulling matching conversations.",
            "Reach 145,000 downloads in total (on July 1st, 2019) with rate of 4.1, published on Sep 1, 2017."],
        link: [
            {name: "Google Play", href: "https://play.google.com/store/apps/details?id=com.tbs.fbha"}
        ],
        utilized: ["Java", "JS", "Android"]
    },
    {   name: "Poppop",
        descriptionName: "Mini game",
        content: ["Implemented a mini game with simple graphic included animation and sound.",
            "Reach  430,000 downloads in total (on July 1st, 2019) with rate of 4.3, published on Jun 1, 2016."],
        link: [
            {name: "Google Play", href: "https://play.google.com/store/apps/details?id=com.tbs.poppop"},
            {name: "App Store", href: "https://apps.apple.com/vn/app/bop-bop/id1326031239"}
        ],
        utilized: ["Android", "iOS", "Java", "Swift 3", "Android Studio", "Xcode", "andEngine", "SpriteKit"]
    }
];

const employers = [
    {
        id: "iotex",
        descriptionName: "Mobile Wallet and Web Cryptipo Currency App",
        content: ["is member of development team of IoTeX projects deployed at",
            "http://iotex.io"],
        utilized: ["java", "js", "php", "android", "oop", "git", "unix"]
    },
    {
        id: "energybuilder",
        descriptionName: "Business App",
        content: ["is member of development team of IoTeX projects deployed at",
            "http://iotex.io"],
        utilized: ["java", "js", "php", "android", "oop", "git", "unix"]
    },
];

const skills = {
        proficient: {
            name: "proficient",
            fields: ["java", "js", "php", "android", "oop", "git", "unix"]
        },
        familiar: {
            name: "familiar",
            fields: ["sql", "html/css", "kotlin", "swift", "ios"]
        },
    };


var renderContent = function(contents, utilized, root){
    $.each(contents, function (ckey, cval) {
        var p = $('<p/>')
            .addClass('.profile-detail')
            .css("font-size","13px")
            .text(" - "+cval)
            .appendTo(root);
    });

    $('<p/>')
        .addClass('.profile-detail')
        .css("font-size","13px")
        .html(" - <b>Utilized</b>: "+utilized.join(", "))
        .appendTo(root);
}

$.each(employers, function (key, val) {
    var contentDiv =  $("#"+val.id+"Content");
    contentDiv.css("margin-top", "10px");
    renderContent(val.content, val.utilized, contentDiv);
});


var cList = $('ul#projectsUl')

$.each(personalProjects, function (key, val) {

    var li = $('<li/>')
        .addClass('pv-accomplishment-entity pv-accomplishment-entity--with-separator pv-accomplishment-entity--first pv-accomplishment-entity--expanded ember-view')
        .css("padding-right", "10px")
        .appendTo(cList);

    var div = $('<div/>').css("display","flex").appendTo(li);
    $('<h4/>')
        .addClass('pv-accomplishment-entity__title')
        .text(val.descriptionName)
        .appendTo(div);

    if (val.link.length > 0){
        var links = $('<div/>').css("font-size", "13px").append("&nbsp;(");
        $.each(val.link, function (lkey, lval) {
            var a = $('<a/>').attr('href', lval.href).attr('target', "_blank").text(lval.name);
            if (lkey < val.link.length - 1) a.append(",&nbsp;");
            a.appendTo(links);
        });
        links.append(")&nbsp;");
        links.appendTo(div);
    }
    renderContent(val.content, val.utilized, li);
});
