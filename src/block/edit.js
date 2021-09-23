const { __ } = wp.i18n;
const { Fragment } = wp.element;
import { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl, ToggleControl, Toolbar } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
    const { className, url, id, alt, name, position, bio, showSocialProfile, fbLink, twLink, linkedinLink, insLink, whsLink, ytLink } = attributes; 
    return(
        <Fragment>
            <InspectorControls>        
                <PanelBody
                    title={__('Social Profiles')}
                    initialOpen= { true }
                >
                    <ToggleControl
                        label="Show Social Profiles"
                        checked={ showSocialProfile }
                        onChange={ () => setAttributes({ showSocialProfile: !showSocialProfile }) }
                    />
                    {
                        showSocialProfile &&
                        <Fragment>
                            <TextControl
                                label="Facebook Profile Link"
                                value={ fbLink }
                                onChange={ ( fbLink ) => setAttributes( { fbLink } ) }
                                placeholder="Insert FB Profile Link"
                                help="keep it blank to skip"
                            />
                            <TextControl
                                label="Twitter Profile Link"
                                value={ twLink }
                                onChange={ ( twLink ) => setAttributes( { twLink } ) }
                                placeholder="Insert Twitter Profile Link"
                                help="keep it blank to skip"
                            />
                            <TextControl
                                label="Linkedin Profile Link"
                                value={ linkedinLink }
                                onChange={ ( linkedinLink ) => setAttributes( { linkedinLink } ) }
                                placeholder="Insert Linkedin Profile Link"
                                help="keep it blank to skip"
                            />
                            <TextControl
                                label="Instagram Profile Link"
                                value={ insLink }
                                onChange={ ( insLink ) => setAttributes( { insLink } ) }
                                placeholder="Insert Instagram Profile Link"
                                help="keep it blank to skip"
                            />
                            <TextControl
                                label="WhatsApp Profile Link"
                                value={ whsLink }
                                onChange={ ( whsLink ) => setAttributes( { whsLink } ) }
                                placeholder="Insert WhatsApp Profile Link"
                                help="keep it blank to skip"
                            />
                            <TextControl
                                label="Youtube Channel Link"
                                value={ ytLink }
                                onChange={ ( ytLink ) => setAttributes( { ytLink } ) }
                                placeholder="Insert Youtube Link"
                                help="keep it blank to skip"
                            />
                        </Fragment>
                    }
                </PanelBody>
            </InspectorControls>
            <BlockControls>
            {
                url &&
                    <Toolbar>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                allowedTypes={["image"]}
                                value={id}
                                render={({ open }) => {
                                    return (
                                        <Button
                                            className="components-icon-button components-toolbar__control"
                                            label={__(
                                                "Edit Image"
                                            )}
                                            onClick={open}
                                            icon="edit"
                                        />
                                    );
                                }}
                            />
                        </MediaUploadCheck>
                        <Button
                            className="components-icon-button components-toolbar__control"
                            label={__(
                                "Delete Image"
                            )}
                            onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                            icon="trash"
                        />
                    </Toolbar>
                }
            </BlockControls>
            <div className={`${className} gtm_single_team_member`}>
            {
                url ? (
                    <div className="team_member_photo">
                        <img src={url} alt={alt} className={`wp-image-${id}`} />
                    </div>
                ) : (
                    <MediaPlaceholder
                        icon="format-image"
                        onSelect={ media => setAttributes({ 
                            url:media.url, 
                            id: media.id,
                            alt: media.alt
                        })}
                        onFilesPreUpload={ media => setAttributes({ 
                            url:media.url, 
                            id: media.id,
                            alt: media.alt
                        })}
                        onSelectURL={ url => setAttributes({ url })}
                        allowedTypes={["image"]}
                        labels = { { title: 'Add Photo' } }
                    />
                )
            }
                <div className="team_member_content">
                    <RichText
                        tagName="h2"
                        className="member_name"
                        value={ name }
                        onChange={ ( name ) => setAttributes( { name } ) }
                    />
                    <RichText
                        tagName="h4"
                        className="member_position"
                        value={ position }
                        onChange={ ( position ) => setAttributes( { position } ) }
                    />
                    <RichText
                        tagName="p"
                        className="member_bio"
                        value={ bio }
                        onChange={ ( bio ) => setAttributes( { bio } ) }
                        placeholder="Write a short bio"
                    />
                    {
                        showSocialProfile &&
                        <div className="social_profiles">
                            {
                                fbLink &&
                                <a href={fbLink} target="_blank" rel="nofollow noopener"><span class="dashicons dashicons-facebook-alt"></span></a>
                            }
                            {
                                twLink &&
                                <a href={twLink} target="_blank" rel="nofollow noopener"><span class="dashicons dashicons-twitter-alt"></span></a>
                            }
                            {
                                linkedinLink &&
                                <a href={linkedinLink} target="_blank" rel="nofollow noopener"><span class="dashicons dashicons-linkedin"></span></a>
                            }
                            {
                                insLink &&
                                <a href={insLink} target="_blank" rel="nofollow noopener"><span class="dashicons dashicons-instagram"></span></a>
                            }
                            {
                                whsLink &&
                                <a href={whsLink} target="_blank" rel="nofollow noopener"><span class="dashicons dashicons-whatsapp"></span></a>
                            }
                            {
                                ytLink &&
                                <a href={ytLink} target="_blank" rel="nofollow noopener"><span class="dashicons dashicons-youtube"></span></a>
                            }
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 
