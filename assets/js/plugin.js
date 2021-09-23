;(function($){
    
    // Team Grid View 
    $(document).ready(function(){
        let totalGrid = $(".wp-block-bcb-team-grid");
        const deskScreen = window.matchMedia('(min-width: 1025px)');
        const tabletScreen = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
        const mobileScreen = window.matchMedia('(max-width: 767px)');

        for(let i = 0; i < totalGrid.length; i ++ ){

            // Selectors 
            let memberName = $(totalGrid[i]).children(".wp-block-bcb-team-member").children(".team_member_content").children(".member_name");
            let memberTitle = $(totalGrid[i]).children(".wp-block-bcb-team-member").children(".team_member_content").children(".member_position");
            let memberBio = $(totalGrid[i]).children(".wp-block-bcb-team-member").children(".team_member_content").children(".member_bio");

            // social icons
            let socialIcons = $(totalGrid[i]).children(".wp-block-bcb-team-member").children(".team_member_content").children(".social_profiles").children("a").children("span");

            // icon color 
            let iconsColor = $(totalGrid[i]).attr("data-icons");

            // Colors
            let memberNameColor = $(totalGrid[i]).attr("data-mnc");
            let memberTitleColor = $(totalGrid[i]).attr("data-mtc");
            let memberBioColor = $(totalGrid[i]).attr("data-mbc");

            // font family
            let memberNameFont = $(totalGrid[i]).attr("data-mnf");
            let memberTitleFont = $(totalGrid[i]).attr("data-mtf");
            let memberBioFont = $(totalGrid[i]).attr("data-mbf");

            // font size
            // name
            let nameDeskSize = $(totalGrid[i]).attr("data-mndf");
            let nameTabSize = $(totalGrid[i]).attr("data-mntf");
            let nameMobSize = $(totalGrid[i]).attr("data-mnmf");
            // title
            let titleDeskSize = $(totalGrid[i]).attr("data-mtdf");
            let titleTabSize = $(totalGrid[i]).attr("data-mttf");
            let titleMobSize = $(totalGrid[i]).attr("data-mtmf");
            // bio
            let bioDeskSize = $(totalGrid[i]).attr("data-mbdf");
            let bioTabSize = $(totalGrid[i]).attr("data-mbtf");
            let bioMobSize = $(totalGrid[i]).attr("data-mbmf");

            for(let j=0; j < memberName.length; j++){
                // load google font
                WebFont.load({
                    google: {
                        families: [memberNameFont, memberTitleFont, memberBioFont ]
                    }
                });
                // Responsive Font Size
                if(deskScreen.matches){
                    memberName[j].style.fontSize = nameDeskSize +"px";
                    memberTitle[j].style.fontSize = titleDeskSize +"px";
                    memberBio[j].style.fontSize = bioDeskSize +"px";
                }
                if(tabletScreen.matches){
                    memberName[j].style.fontSize = nameTabSize +"px";
                    memberTitle[j].style.fontSize = titleTabSize +"px";
                    memberBio[j].style.fontSize = bioTabSize +"px";
                }
                if(mobileScreen.matches){
                    memberName[j].style.fontSize = nameMobSize +"px";
                    memberTitle[j].style.fontSize = titleMobSize +"px";
                    memberBio[j].style.fontSize = bioMobSize +"px";
                }
                // Member Name
                memberName[j].style.color = memberNameColor;
                memberName[j].style.fontFamily = memberNameFont;
                // Title 
                memberTitle[j].style.color = memberTitleColor;
                memberTitle[j].style.fontFamily = memberTitleFont;
                // Bio
                memberBio[j].style.color = memberBioColor;
                memberBio[j].style.fontFamily = memberBioFont;
            }

            // social icons colors 
            for(let k=0; k < socialIcons.length; k++){
                socialIcons[k].style.color = iconsColor;
            }
        }

    })

})(jQuery);