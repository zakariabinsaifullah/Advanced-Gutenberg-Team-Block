const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import FontPicker from "font-picker-react";
import styled from 'styled-components';

const colors = [
    { name: 'red', color: '#E05D5D' },
    { name: 'white', color: '#ffffff' },
    { name: 'blue', color: '#290FBA' },
    { name: 'black', color: '#333333' },
    { name: 'gray', color: '#9D9D9D' },
    { name: 'orange', color: '#DF711B' },
];

const styles = [
    { label: 'Default Style', value: 'grid_normal' },
    { label: 'Side by Side Style', value: 'side_by_Side' },
    { label: 'Hover Style', value: 'hover_style' }
];
 // Dynamic Styles
let Wrapper = styled.div`
    .member_name {
        color: ${ props => props.ncolor } !important;
        font-family: ${ props => props.nfont };
        font-size: ${ props => props.nfontSize }px !important;
    }
    .member_position {
        color: ${ props => props.tcolor } !important;
        font-family: ${ props => props.tfont };
        font-size: ${ props => props.tfontSize }px !important;
    }
    .member_bio {
        color: ${ props => props.bcolor };
        font-family: ${ props => props.bfont };
        font-size: ${ props => props.bfontSize }px !important;
    }
    .social_profiles a span {
        color: ${ props => props.socialColor }
    }
`;      
    function activeTab(e){
        let container = document.getElementById("settings_tabs_id");
        let tabs = container.getElementsByClassName("setting_tab");

        for (let i = 0; i < tabs.length; i++) {
            let current = document.getElementsByClassName("setting_active");
            current[0].className = current[0].className.replace(" setting_active", "");
            e.target.className += " setting_active";
        }
    }

    // Main Settings Tab
    function openSetting(area) {
        let i, tab;
        tab = document.getElementsByClassName("setting_content");
        for (i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
        document.getElementById(area).style.display = "block";
    }

    // Responsive Columns Function
    function openCol(device) {
        let i, tab;
        tab = document.getElementsByClassName("colContent");
        for (i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
        document.getElementById(device).style.display = "block";
    }
    // Font Size 
    function openFont(device) {
        let i, tab;
        tab = document.getElementsByClassName("fontContent");
        for (i = 0; i < tab.length; i++) {
            tab[i].style.display = "none";
        }
        document.getElementById(device).style.display = "block";
    }
    
const Edit = ({ className, attributes, setAttributes }) => {
    const { displayStyle, dcols, tcols, mcols, nameColor, titleColor, bioColor, nameFont, titleFont, bioFont, nameDeskSize, nameTabSize, nameMobSize, titleDeskSize, titleTabSize, titleMobSize, bioDeskSize, bioTabSize, bioMobSize, socialIconsColor } = attributes;
    return(
        <Fragment>
            <InspectorControls>
                <div className="settings_tabs" id="settings_tabs_id">
                    <button className="setting_tab setting_active" onClick={ ()=> { activeTab(event); openSetting('setting')} }>Settings</button>
                    <button className="setting_tab" onClick={ ()=> {  activeTab(event); openSetting('typography') } }>Typography</button>
                </div>
                {/* General Settings */}
                <div id="setting" className="setting_content" style={{ display: 'block' }}>
                    <div className="grid_styles p10 mt10">
                        <SelectControl
                            label="Select Grid View Style"
                            value={ displayStyle }
                            options={ styles }
                            onChange={ ( displayStyle ) => { setAttributes( { displayStyle } ) } }
                        />
                    </div>
                    {/* Columns Settings */}
                    <div className="cols_settings_wrapper p10">
                        <div className="columns_wrapper">
                            <strong>Number of Columns</strong>
                            <div className="devices_list">
                                <span className="dashicons dashicons-desktop" onClick={ ()=> openCol('desktop') } ></span>
                                <span className="dashicons dashicons-tablet" onClick={ ()=> openCol('tablet') }></span>
                                <span className="dashicons dashicons-smartphone" onClick={ ()=> openCol('smartphone') }></span>
                            </div>
                        </div>
                        <div className="col-tab-content">
                            <div id="desktop" className="colContent" style={{ display: 'block' }}>
                                <RangeControl
                                    label="Columns on Desktop"
                                    value={ dcols }
                                    onChange={ ( dcols ) => setAttributes( { dcols } ) }
                                    min={ 1 }
                                    max={ 5 }
                                />
                            </div>

                            <div id="tablet" className="colContent">
                                <RangeControl
                                    label="Columns on Tablet"
                                    value={ tcols }
                                    onChange={ ( tcols ) => setAttributes( { tcols } ) }
                                    min={ 1 }
                                    max={ 5 }
                                /> 
                            </div>

                            <div id="smartphone" className="colContent">
                                <RangeControl
                                    label="Columns on Mobile"
                                    value={ mcols }
                                    onChange={ ( mcols ) => setAttributes( { mcols } ) }
                                    min={ 1 }
                                    max={ 5 }
                                /> 
                            </div>
                        </div>
                    </div>
                    {/* End Columns Settings */}
                    {/* Colors Settings */}
                    <PanelBody
                        title={__('Colors Settings')}
                        initialOpen= { false }
                    >
                        <p>Name Color</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ nameColor }
                            onChange={ ( nameColor ) => setAttributes( { nameColor } ) } 
                        />
                        <p>Position/Title Color</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ titleColor }
                            onChange={ ( titleColor ) => setAttributes( { titleColor } ) } 
                        />
                        <p>Bio Color</p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ bioColor }
                            onChange={ ( bioColor ) => setAttributes( { bioColor } ) } 
                        />
                        <p><strong>Social Icons Color</strong></p>
                        <ColorPalette 
                            colors={ colors } 
                            value={ socialIconsColor }
                            onChange={ ( socialIconsColor ) => setAttributes( { socialIconsColor } ) } 
                        />
                    </PanelBody>
                    {/* Colors Setting */}
                </div>
                {/* Typography Settings */}
                <Wrapper id="typography" className="setting_content p10" >
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                            <strong>Name Font</strong>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ nameFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                nameFont: nextFont.family
                            }) }
                        />
                    </div>
                    <div className="font_family_picker mb10">
                        <div className="fonts_title">
                            <strong>Title Font</strong>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ titleFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                titleFont: nextFont.family
                            }) }
                        />
                    </div>
                    <div className="font_family_picker">
                        <div className="fonts_title">
                            <strong>Bio Font</strong>
                        </div>
                        <FontPicker
                            apiKey="AIzaSyDYweksXJLcE0rt0XaYbi1NUO4tNXsGmZ0"
                            activeFontFamily={ bioFont }
                            limit={ 200 }
                            onChange={ ( nextFont ) => setAttributes({
                                bioFont: nextFont.family
                            }) }
                        />
                    </div>
                    {/* Fonts Size Settings */}
                    <div className="cols_settings_wrapper mt20 mb10">
                        <div className="columns_wrapper">
                            <strong>Font Size</strong>
                            <div className="devices_list">
                                <span className="dashicons dashicons-desktop" onClick={ ()=> openFont('desktopFont') }></span>
                                <span className="dashicons dashicons-tablet" onClick={ ()=> openFont('tabletFont') }></span>
                                <span className="dashicons dashicons-smartphone" onClick={ ()=> openFont('smartphoneFont') }></span>
                            </div>
                        </div>
                        <div className="col-tab-content">
                            <div id="desktopFont" className="fontContent" style={{ display: 'block' }}>
                                <RangeControl
                                    label="Name Font Size"
                                    value={ nameDeskSize }
                                    onChange={ ( nameDeskSize ) => setAttributes( { nameDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Title/Position Font Size"
                                    value={ titleDeskSize }
                                    onChange={ ( titleDeskSize ) => setAttributes( { titleDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Bio Font Size"
                                    value={ bioDeskSize }
                                    onChange={ ( bioDeskSize ) => setAttributes( { bioDeskSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </div>

                            <div id="tabletFont" className="fontContent">
                                <RangeControl
                                    label="Name Font Size"
                                    value={ nameTabSize }
                                    onChange={ ( nameTabSize ) => setAttributes( { nameTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Title/Position Font Size"
                                    value={ titleTabSize }
                                    onChange={ ( titleTabSize ) => setAttributes( { titleTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Bio Font Size"
                                    value={ bioTabSize }
                                    onChange={ ( bioTabSize ) => setAttributes( { bioTabSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                /> 
                            </div>

                            <div id="smartphoneFont" className="fontContent">
                                <RangeControl
                                    label="Name Font Size"
                                    value={ nameMobSize }
                                    onChange={ ( nameMobSize ) => setAttributes( { nameMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Title/Position Font Size"
                                    value={ titleMobSize }
                                    onChange={ ( titleMobSize ) => setAttributes( { titleMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Bio Font Size"
                                    value={ bioMobSize }
                                    onChange={ ( bioMobSize ) => setAttributes( { bioMobSize } ) }
                                    min={ 1 }
                                    max={ 100 }
                                /> 
                            </div>
                        </div>
                    </div>
                    {/* End Columns Settings */}
                </Wrapper>
                {/* End TYPOGRAPHY TAB */}
            </InspectorControls>
            <Wrapper className={`${className} ${displayStyle} gtm_team_grid dcols-${dcols} tcols-${tcols} mcols-${mcols}`} ncolor={nameColor} nfont={nameFont} nfontSize={nameDeskSize} tcolor={titleColor} tfont={titleFont} tfontSize={titleDeskSize} bcolor={bioColor} bfont={bioFont} bfontSize={bioDeskSize} socialColor={socialIconsColor}>
                <InnerBlocks 
                    allowedBlocks={ ['bcb/team-member'] }
                    template={[
                        ['bcb/team-member'],
                        ['bcb/team-member'],
                        ['bcb/team-member'],
                        ['bcb/team-member']
                    ]}
                />
            </Wrapper>
        </Fragment>
    );
}
export default Edit; 
