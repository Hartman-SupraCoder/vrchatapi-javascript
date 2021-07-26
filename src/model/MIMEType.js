/**
 * VRChat API Documentation
 * ![VRChat API Banner](https://raw.githubusercontent.com/vrchatapi/vrchatapi.github.io/master/assets/apibanner.png)  # VRChat API Documentation This project is an [OPEN Open Source Project](https://openopensource.org)  Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.  ## Disclaimer  This is the official response of the VRChat Team (from Tupper more specifically) on the usage of the VRChat API.  > **Use of the API using applications other than the approved methods (website, VRChat application) are not officially supported. You may use the API for your own application, but keep these guidelines in mind:** > * We do not provide documentation or support for the API. > * Do not make queries to the API more than once per 60 seconds. > * Abuse of the API may result in account termination. > * Access to API endpoints may break at any given time, with no warning.  As stated, this documentation was not created with the help of the official VRChat team. Therefore this documentation is not an official documentation of the VRChat API and may not be always up to date with the latest versions. If you find that a page or endpoint is not longer valid please create an issue and tell us so we can fix it.  ## Get in touch with us!  [https://discord.gg/qjZE9C9fkB#vrchat-api](https://discord.gg/qjZE9C9fkB)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: me@ruby.js.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class MIMEType.
* @enum {}
* @readonly
*/
export default class MIMEType {
    
        /**
         * value: "image⁄jpeg"
         * @const
         */
        "image⁄jpeg" = "image⁄jpeg";

    
        /**
         * value: "image⁄jpg"
         * @const
         */
        "image⁄jpg" = "image⁄jpg";

    
        /**
         * value: "image⁄png"
         * @const
         */
        "image⁄png" = "image⁄png";

    
        /**
         * value: "image⁄webp"
         * @const
         */
        "image⁄webp" = "image⁄webp";

    
        /**
         * value: "image⁄gif"
         * @const
         */
        "image⁄gif" = "image⁄gif";

    
        /**
         * value: "image⁄bmp"
         * @const
         */
        "image⁄bmp" = "image⁄bmp";

    
        /**
         * value: "image⁄svg＋xml"
         * @const
         */
        "image⁄svg＋xml" = "image⁄svg＋xml";

    
        /**
         * value: "image⁄tiff"
         * @const
         */
        "image⁄tiff" = "image⁄tiff";

    
        /**
         * value: "application⁄x-avatar"
         * @const
         */
        "application⁄x-avatar" = "application⁄x-avatar";

    
        /**
         * value: "application⁄x-world"
         * @const
         */
        "application⁄x-world" = "application⁄x-world";

    
        /**
         * value: "application⁄gzip"
         * @const
         */
        "application⁄gzip" = "application⁄gzip";

    
        /**
         * value: "application/x-rsync-signature"
         * @const
         */
        "application/x-rsync-signature" = "application/x-rsync-signature";

    
        /**
         * value: "application/x-rsync-delta"
         * @const
         */
        "application/x-rsync-delta" = "application/x-rsync-delta";

    
        /**
         * value: "application/octet-stream"
         * @const
         */
        "application/octet-stream" = "application/octet-stream";

    

    /**
    * Returns a <code>MIMEType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MIMEType} The enum <code>MIMEType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
