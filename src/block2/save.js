import { InnerBlocks } from '@wordpress/block-editor';

const Save = ({ className, attributes }) => {
    const { displayStyle, dcols, tcols, mcols, nameColor, titleColor, bioColor, nameFont, titleFont, bioFont, nameDeskSize, nameTabSize, nameMobSize, titleDeskSize, titleTabSize, titleMobSize, bioDeskSize, bioTabSize, bioMobSize, socialIconsColor } = attributes; 
    return(
        <div className={`${className} ${displayStyle} gtm_team_grid dcols-${dcols} tcols-${tcols} mcols-${mcols}`} data-mnc={nameColor} data-mtc={titleColor} data-mbc={bioColor} data-mnf={nameFont} data-mtf={ titleFont} data-mbf={bioFont} data-mndf={nameDeskSize} data-mntf={nameTabSize} data-mnmf={nameMobSize} data-mtdf={titleDeskSize} data-mttf={titleTabSize} data-mtmf={titleMobSize} data-mbdf={bioDeskSize} data-mbtf={bioTabSize} data-mbmf={bioMobSize} data-icons={socialIconsColor}>
            <InnerBlocks.Content />
        </div>
    );
}
export default Save; 

