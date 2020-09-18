import { 
  fontsToLoadArr,
  uMGreen } from '../common-styles';
import { thisUrl } from "./_general";
import { gallery } from "./gallery";
import { privacy } from "./privacy";
import { resources } from "./resources";
import { consultants } from "./consultants";

export const contact = {
  meta: {
    path:        'contact',
    h1Tag:  'Contact Us',
    // limit title to 55 characters
    seoTitle:       'Contact Urban Meadow',
    specialCardTitle: 'Contact Us!',
    // limit description to 120-140 characters
    //            1        10        20        30        40        50        60        70        80        90        100       110        120        130        140
    description: 'Questions, comments, feedback? Contact Urban Meadow today!',
    image:       'https://cdn.buttercms.com/3nUabBVEQqpiggHNBU4Q',
    alt:         'pigeon and dandelions in urban meadow landscape',
    hrefLang:    'en',
    categories: [
    ],
    tags: [
    ],
  },
  fontsToLoad: fontsToLoadArr.slice(0,2),
  // contact info is in the footer
  info: {
    companyName: 'urbanmeadow.org',
    buttonLabel: 'Contact Us',
  },
  submitButton: 'Send',
  // success message that displays when user clicks send on contact us
  
  // failure message that displays if contact us is not successfull upon send
  fail: {
    header: 'Oops!',
    messages: ['Sorry, something went wrong.  Please try again. If this does not work, please email info@urbanmeadow.org.'],
  },
  generalFeedback: {
    general: {
      h1: 'Contact Us',
      html: <p className='p'>Ask a general question. All general inquiries are handled in confidence in accordance with our <a href={`${thisUrl}/${privacy.meta.path}`} target='_blank'>Terms and Conditions and Privacy Policy</a>.
      <style jsx>{`
        p {
          width: 300px;
          color: #333;
          font-size: 12px;
          margin-bottom: 10px;
        }
        a {
          text-decoration: underline;
        }
        a:hover {
          color: ${uMGreen};
        }
      `}</style></p>,
     }, // 0 omit, 1 include, 2 require
    project: {
      h1: 'Submit A Project',
      html: <p className='p'>Submit a project for use on our <a href={`${thisUrl}/${gallery.meta.path}`} target='_blank'>{gallery.meta.h1Tag}</a> page. Information submitted will be used in accordance with our <a href={`${thisUrl}/${privacy.meta.path}`} target='_blank'>Terms and Conditions and Privacy Policy</a>.
      <style jsx>{`
        p {
          width: 300px;
          color: #333;
          font-size: 12px;
          margin-bottom: 10px;
        }
        a {
          text-decoration: underline;
        }
        a:hover {
          color: ${uMGreen};
        }
      `}</style></p>,
    },	
    resource: {
      h1: 'Submit A Resource',
      html: <p className='p'>Submit an online resource for use on our <a href={`${thisUrl}/${resources.meta.path}`} target='_blank'>{resources.meta.h1Tag}</a> page. Information submitted will be used in accordance with our <a href={`${thisUrl}/${privacy.meta.path}`} target='_blank'>Terms and Conditions and Privacy Policy</a>.
      <style jsx>{`
        p {
          width: 300px;
          color: #333;
          font-size: 12px;
          margin-bottom: 10px;
        }
        a {
          text-decoration: underline;
        }
        a:hover {
          color: ${uMGreen};
        }
      `}</style></p>,
    },
    consult: {
      h1: 'Request A Consultation',
      html: <p className='p'>Ask a specific question, or request help with a project. All project-specific inquiries are handled in confidence in accordance with our <a href={`${thisUrl}/${privacy.meta.path}`} target='_blank'>Terms and Conditions and Privacy Policy</a>.
      <style jsx>{`
        p {
          width: 300px;
          color: #333;
          font-size: 12px;
          margin-bottom: 10px;
        }
        a {
          text-decoration: underline;
        }
        a:hover {
          color: ${uMGreen};
        }
      `}</style></p>,
     },
     article: {
      h1: 'Submit An Article',
      html: <p className='p'>Submit an article for the Urban Meadow Blog! We'll collaborate with you to get the article in ship shape for publication, so don't worry if it's not finished.  We'll handle your submission in accordance with our <a href={`${thisUrl}/${privacy.meta.path}`} target='_blank'>Terms and Conditions and Privacy Policy</a>.
      <style jsx>{`
        p {
          width: 300px;
          color: #333;
          font-size: 12px;
          margin-bottom: 10px;
        }
        a {
          text-decoration: underline;
        }
        a:hover {
          color: ${uMGreen};
        }
      `}</style></p>,
     },
  },
  // fields for submissions go DIRECTLY into Mongo
  // make sure the fields are in the schema
  fields: [
    {
      key: 'name',
      label: 'Name',
      def: '',
      type: {
        general: 2, // 0 omit, 1 include, 2 require
        project: 2,
        resource: 2,
        consult: 2,
        article: 2,
      },
    },
    {
      key: 'email',
      label: 'Email',
      def: '',
      type: {
        general: 2, // 0 omit, 1 include, 2 require
        project: 2,
        resource: 2,
        consult: 2,
        article: 2,
      },
    },
    {
      key: 'phone',
      label: 'Phone',
      def: '',
      type: {
        general: 1, // 0 omit, 1 include, 2 require
        project: 1,
        resource: 1,
        consult: 2,
        article: 2,
      },
    },
    {
      key: 'address',
      label: {
        general: 'Address',
        project: 'Project Location',
        consult: 'Project Location',
        article: 'Address',
      },
      def: '',
      type: {
        general: 1, // 0 omit, 1 include, 2 require
        project: 2,
        resource: 0,
        consult: 2,
        article: 2,
      },
    },
    {
      key: 'city',
      label: 'City',
      def: '',
      type: {
        general: 1, // 0 omit, 1 include, 2 require
        project: 2,
        resource: 0,
        consult: 2,
        article: 2,
      },
    },
    {
      key: 'state',
      label: 'State / Province',
      def: '',
      type: {
        general: 1, // 0 omit, 1 include, 2 require
        project: 2,
        resource: 0,
        consult: 2,
        article: 2,
      },
    },
    {
      key: 'country',
      label: 'Country',
      def: '',
      type: {
        general: 1, // 0 omit, 1 include, 2 require
        project: 2,
        resource: 0,
        consult: 2,
        article: 2,
      },
    },
    {
      key: 'url',
      label: 'URL of resource',
      def: '',
      fieldType: 'textarea',
      type: {
        general: 0, // 0 omit, 1 include, 2 require
        project: 0,
        resource: 2,
        consult: 0,
        article: 0,
      },
    },
    {
      key: 'consultant',
      label: 'Consultant Requested',
      def: 'any',
      fieldType: 'select',
      type: {
        general: 0, // 0 omit, 1 include, 2 require
        project: 0,
        resource: 0,
        consult: 2,
        article: 0,
      },
      optionsJsx: Array.isArray(consultants.consultantsList) ?
        consultants.consultantsList.map((c,i)=>{
          return <option key={i} value={c.path}>{c.nameFirst} {c.nameLast}</option> 
        }) : [],
    },
    {
      key: 'description',
      fieldType: 'textarea',
      label: {
        general: 'Message', // 0 omit, 1 include, 2 require
        project: 'Describe the project. Be as complete as practical, but don\'t worry if it needs editing. We edit everything before publication.',
        resource: 'Is there anything you\'d like to say about this resource?',
        consult: 'Describe the project you\'d like help with, or the question you have.',
        article: 'Even if you upload a Word document (farther below), please say a few words here.',
      },
      def: '',
      type: {
        general: 2, // 0 omit, 1 include, 2 require
        project: 2,
        resource: 1,
        consult: 2,
        article: 2,
      },
    },
  ]
};

contact.fields.forEach(f=>{
	if(f.key === 'consultant'){
		f.optionsJsx.push(<option key='any' value='any'>Any</option>)
	}
});