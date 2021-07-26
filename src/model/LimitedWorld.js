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
import ReleaseStatus from './ReleaseStatus';

/**
 * The LimitedWorld model module.
 * @module model/LimitedWorld
 * @version 1.0.0
 */
class LimitedWorld {
    /**
     * Constructs a new <code>LimitedWorld</code>.
     * @alias module:model/LimitedWorld
     * @param authorId {String} 
     * @param authorName {String} 
     * @param capacity {Number} 
     * @param favorites {Number} 
     * @param heat {Number} 
     * @param id {String} 
     * @param imageUrl {String} 
     * @param name {String} 
     * @param organization {String} 
     * @param popularity {Number} 
     * @param publicationDate {String} 
     * @param releaseStatus {module:model/ReleaseStatus} 
     * @param tags {Array.<String>} 
     * @param thumbnailImageUrl {String} 
     * @param unityPackages {Array.<Object>} 
     */
    constructor(authorId, authorName, capacity, favorites, heat, id, imageUrl, name, organization, popularity, publicationDate, releaseStatus, tags, thumbnailImageUrl, unityPackages) { 
        
        LimitedWorld.initialize(this, authorId, authorName, capacity, favorites, heat, id, imageUrl, name, organization, popularity, publicationDate, releaseStatus, tags, thumbnailImageUrl, unityPackages);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authorId, authorName, capacity, favorites, heat, id, imageUrl, name, organization, popularity, publicationDate, releaseStatus, tags, thumbnailImageUrl, unityPackages) { 
        obj['authorId'] = authorId;
        obj['authorName'] = authorName;
        obj['capacity'] = capacity;
        obj['favorites'] = favorites;
        obj['heat'] = heat;
        obj['id'] = id;
        obj['imageUrl'] = imageUrl;
        obj['name'] = name;
        obj['organization'] = organization;
        obj['popularity'] = popularity;
        obj['publicationDate'] = publicationDate;
        obj['releaseStatus'] = releaseStatus;
        obj['tags'] = tags;
        obj['thumbnailImageUrl'] = thumbnailImageUrl;
        obj['unityPackages'] = unityPackages;
    }

    /**
     * Constructs a <code>LimitedWorld</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitedWorld} obj Optional instance to populate.
     * @return {module:model/LimitedWorld} The populated <code>LimitedWorld</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LimitedWorld();

            if (data.hasOwnProperty('authorId')) {
                obj['authorId'] = ApiClient.convertToType(data['authorId'], 'String');
            }
            if (data.hasOwnProperty('authorName')) {
                obj['authorName'] = ApiClient.convertToType(data['authorName'], 'String');
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('favorites')) {
                obj['favorites'] = ApiClient.convertToType(data['favorites'], 'Number');
            }
            if (data.hasOwnProperty('heat')) {
                obj['heat'] = ApiClient.convertToType(data['heat'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('labsPublicationDate')) {
                obj['labsPublicationDate'] = ApiClient.convertToType(data['labsPublicationDate'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('occupants')) {
                obj['occupants'] = ApiClient.convertToType(data['occupants'], 'Number');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('popularity')) {
                obj['popularity'] = ApiClient.convertToType(data['popularity'], 'Number');
            }
            if (data.hasOwnProperty('publicationDate')) {
                obj['publicationDate'] = ApiClient.convertToType(data['publicationDate'], 'String');
            }
            if (data.hasOwnProperty('releaseStatus')) {
                obj['releaseStatus'] = ReleaseStatus.constructFromObject(data['releaseStatus']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('thumbnailImageUrl')) {
                obj['thumbnailImageUrl'] = ApiClient.convertToType(data['thumbnailImageUrl'], 'String');
            }
            if (data.hasOwnProperty('unityPackages')) {
                obj['unityPackages'] = ApiClient.convertToType(data['unityPackages'], [Object]);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} authorId
 */
LimitedWorld.prototype['authorId'] = undefined;

/**
 * @member {String} authorName
 */
LimitedWorld.prototype['authorName'] = undefined;

/**
 * @member {Number} capacity
 */
LimitedWorld.prototype['capacity'] = undefined;

/**
 * @member {Date} created_at
 */
LimitedWorld.prototype['created_at'] = undefined;

/**
 * @member {Number} favorites
 */
LimitedWorld.prototype['favorites'] = undefined;

/**
 * @member {Number} heat
 */
LimitedWorld.prototype['heat'] = undefined;

/**
 * @member {String} id
 */
LimitedWorld.prototype['id'] = undefined;

/**
 * @member {String} imageUrl
 */
LimitedWorld.prototype['imageUrl'] = undefined;

/**
 * @member {String} labsPublicationDate
 */
LimitedWorld.prototype['labsPublicationDate'] = undefined;

/**
 * @member {String} name
 */
LimitedWorld.prototype['name'] = undefined;

/**
 * @member {Number} occupants
 */
LimitedWorld.prototype['occupants'] = undefined;

/**
 * @member {String} organization
 */
LimitedWorld.prototype['organization'] = undefined;

/**
 * @member {Number} popularity
 */
LimitedWorld.prototype['popularity'] = undefined;

/**
 * @member {String} publicationDate
 */
LimitedWorld.prototype['publicationDate'] = undefined;

/**
 * @member {module:model/ReleaseStatus} releaseStatus
 */
LimitedWorld.prototype['releaseStatus'] = undefined;

/**
 * @member {Array.<String>} tags
 */
LimitedWorld.prototype['tags'] = undefined;

/**
 * @member {String} thumbnailImageUrl
 */
LimitedWorld.prototype['thumbnailImageUrl'] = undefined;

/**
 * @member {Array.<Object>} unityPackages
 */
LimitedWorld.prototype['unityPackages'] = undefined;

/**
 * @member {Date} updated_at
 */
LimitedWorld.prototype['updated_at'] = undefined;






export default LimitedWorld;
