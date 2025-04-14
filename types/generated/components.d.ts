import type { Schema, Struct } from '@strapi/strapi';

export interface InformationVisitorInformation extends Struct.ComponentSchema {
  collectionName: 'components_information_visitor_informations';
  info: {
    description: '';
    displayName: 'Visitor Information';
  };
  attributes: {
    address: Schema.Attribute.String;
    contact_information: Schema.Attribute.String;
    entry_fee: Schema.Attribute.String;
    opening_hours: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'information.visitor-information': InformationVisitorInformation;
    }
  }
}
