import { RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes, className }) => {
    const { url, id, alt, name, position, bio, showSocialProfile, fbLink, twLink, linkedinLink, insLink, whsLink, ytLink } = attributes; 
    return(
        <div className={`${className} gtm_single_team_member`}>
        {
            url &&
            <div className="team_member_photo">
                <img src={url} alt={alt} className={`wp-image-${id}`} />
            </div>
        }
            <div className="team_member_content">
                <RichText.Content
                    tagName="h2"
                    className="member_name"
                    value={ name }
                />
                <RichText.Content
                    tagName="h4"
                    className="member_position"
                    value={ position }
                />
                <RichText.Content
                    tagName="p"
                    className="member_bio"
                    value={ bio }
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
    );
}
export default Save; 