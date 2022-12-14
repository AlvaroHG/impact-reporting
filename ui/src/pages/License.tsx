import React from 'react';
import Button from 'antd/es/button';
import { DownloadOutlined } from '@ant-design/icons';
import { textStyles } from '@allenai/varnish';

const { InlineCode, Code } = textStyles;

export const License = () => {
    // const downloadTxtFile = () => {
    //     const element = document.createElement("a");
    //     const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    //     element.href = URL.createObjectURL(file);
    //     element.download = "/AI2 ImpACT License.txt";
    //     document.body.appendChild(element); // Required for this to work in FireFox
    //     element.click();
    // }
    return (
        <React.Fragment>
            <h1>AI2 ImpACT License</h1>
            <p/>
            <Button type="primary" icon={<DownloadOutlined />} href={"/AI2 ImpACT License.txt"}  >
                License Text File</Button>
            <p/>
            <Code variant="dark">
               AI2 ImpACT LICENSE
<br/>Version 1.0, August 12, 2022
<br/>[Link to License Here]
<br/>Preamble
<br/>The AI2 ImpACT License is a free license for AI Components. The AI2 ImpACT License is designed to be modular. Anyone may use the AI2 ImpACT License or a module of it, provided that such use (1) does not modify or change the text of the AI2 ImpACT License as set forth below, and (2) includes the ImpACT Reporting requirement set forth in Section 4 of the AI2 ImpACT License. [find GPL viral license language and put here or in some other section]
<br/>License
<br/>PLEASE READ THIS AI2 ImpACT LICENSE AGREEMENT (“AGREEMENT”) CAREFULLY.  THIS IS A LEGAL AGREEMENT.  BY CLICKING “I ACCEPT”, DOWNLOADING, INSTALLING, LOGGING INTO, ACCESSING OR OTHERWISE USING ANY PART OF THE AI COMPONENTS OR OTHERWISE MANIFESTING YOUR ASSENT TO THESE TERMS, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS AGREEMENT.  IF YOU DO NOT UNEQUIVOCALLY AGREE TO THE TERMS OF THIS AGREEMENT, CLICK “I DO NOT ACCEPT” AND DO NOT DOWNLOAD, INSTALL, ACCESS, COPY, OR OTHERWISE USE THE AI COMPONENTS.
<br/>This AI2 ImpACT License is between Licensor and any person or entity (“Licensee,” “you” or “your”) who purchases, downloads, installs, logs into, accesses or otherwise uses the AI Components.  In the event that Licensee purports to be the agent of, represent or otherwise act on behalf of an entity or any other person, references to “Licensee” will include such entity or person in addition to such representative.
<br/>Definitions. As used in this Agreement, the following capitalized terms have the following meanings:
<br/>
<br/>"AI Components" means, collectively, the AI Solution, the Training Data, the Production Data, the AI Output, and the AI Evolutions.
<br/>
<br/>“AI Evolutions” means the iterations of the AI Solution that evolve during training and subsequent uses, including any modifications to source code or model parameters.
<br/>
<br/>“AI Output” means the results produced after the Production Data is entered into the AI Solution.
<br/>
<br/>“AI Solution” means the algorithm, code, and/or parameters  used to produce the desired outcome, whether a machine learning algorithm or a deeper neural network.
<br/>
<br/>“ImpACT Report” means the Licensee’s report required pursuant to Section 4 below.
<br/>
<br/>“License” means the rights granted to Licensee pursuant to Section 2 below.
<br/>
<br/>“Licensed IP” means, individually and collectively, the AI Solution and Training Data.
<br/>
<br/>"Licensee" means the individual or legal entity exercising permissions granted by this License.
<br/>
<br/>"Licensor" means the copyright owner or legal entity authorized by the copyright owner that is granting the License to the Licensed IP.
<br/>
<br/>“Production Data” means the dataset entered into the AI Solution by the Licensee to produce the AI Output.
<br/>
<br/>“Third Party” means any party other than Licensee or Licensor.
<br/>
<br/>“Training Data” means the dataset used to train the AI Solution, along with the instructions. [if training data is included.. not all models include training data]
<br/>
<br/>Grant of Rights. [this section can be modular]
<br/>
<br/>License to AI Solution and Training Data: During the applicable License Term, and subject to Licensee's compliance with the terms and conditions of this Agreement in general and Section 3 in particular, Licensor grants to Licensee a worldwide, non-exclusive, non-transferable, royalty free license to install and use the Licensed IP in accordance with the terms of this Agreement and all applicable laws, rules and regulations.
<br/>
<br/>Third Party Components:  The Licensed IP may include components under license from third parties, including open-source licenses (the “Third Party Components”).  Third Party Components are subject to the terms of their accompanying licenses.
<br/>
<br/>Equipment:  Licensee will be solely responsible for providing, maintaining and ensuring the compatibility of all hardware, software, electrical and other physical requirements necessary for Licensee’s access to and use of the Licensed IP, including, without limitation, telecommunications and Internet access connections and links, web browsers or other equipment, and programs and services required to access and use the Product.
<br/>Restrictions. [This section can be modular]
<br/>
<br/>General Restrictions: The foregoing License is limited. Licensee will not: (i) copy or use the Licensed IP in any manner except as expressly permitted in this Agreement, including specifically as provided in Section 3b below; or (ii) use the AI Components for any purpose that is unlawful or prohibited by this Agreement or otherwise. If Licensee does not comply with the License terms or the foregoing restrictions, Licensor may terminate this Agreement.
<br/>
<br/>Specific Restrictions:
<br/>
<br/>Use by Third Parties: Licensee agrees that any sublicense of any AI Components will compel any Third Party licensee/sublicensee to comply with the terms of Section 3 and 4 of this Agreement.
<br/>
<br/>Surveillance: Licensee will not use the AI Components to:
<br/>
<br/>Detect or infer any legally protected class or aspect of any person, as defined by U.S. Federal Law; or
<br/>
<br/>Detect or infer aspects and/or features of an identity any person, such as name, family name, address, gender, sexual orientation, race, religion, age, location (at any geographical level), skin color, society or political affiliations, employment status and/or employment history, and health and medical conditions.  Age and medical conditions may be inferred solely for the purpose of improving software/hardware accessibility and such data should not be cached or stored without the explicit and time limited permission of the data subject.
<br/>
<br/>Computer Generated Media: Licensee will not use the AI Components to synthesize and/or modify audio-realistic and/or video-realistic representations (indistinguishable from photo/video recordings) of people and events, without including a caption and/or watermark or other similar notation indicating that the audio-realistic and/or video-realistic representations were generated using the AI Components.
<br/>
<br/>Insurance. Licensee will not use the AI Components to:
<br/>
<br/>Predict the likelihood that any person will request to file an insurance claim;
<br/>Determine an insurance premium or deny insurance applications or claims;
<br/>Predict the likelihood that any person request to file an insurance claim based on determining a lifestyle of a person, medical-test reports, demographic details of a person and/or online activity of a person;
<br/>Determine an insurance premium or deny insurance applications or claims based on data determining a lifestyle of a person, medical-test reports, demographic details of a person, and/or online activity of a person;
<br/>Deny an insurance claim based on any predicted likelihood of the possibility of insurance fraud; or
<br/>
<br/>Medical. Licensee will not use the AI Components to: diagnose or fail to diagnose a medical condition without human oversight.
<br/>
<br/>Criminal. Licensee will not use the AI Components to use personal data or characteristics, physical attributes or traits, or other social or behavioral information to predict the likelihood a person will engage or has engaged in criminal behavior, including without limitation: name, family name, address, gender, sexual orientation, race, religion, age, location (at any geographical level), skin color, society or political affiliations, employment status and/or history, health and medical conditions (including physical, mental), family history, social media and publicly available data, image or video analysis of an individual or a group(s) of individuals, heart-rate, perspiration, breathing, and brain imaging and other metabolic data.
<br/>ImpACT Reporting. [Licensor will complete a first report….]  In connection with the AI Components, Licensee agrees;
<br/>To complete the ImpACT report available at www.[insert.website] (the “ImpACT Report”), and to post and/or make publicly available the results of Licensee's ImpACT Report, without the requirement that members of the general public first pay a subscription, fee, or submit personal identifying information.
<br/>To update the Licensee’s ImpACT Report to reflect any material changes in any of the reporting areas covered by the ImpACT Report promptly after such changes have occurred; and
<br/>To include this requirement in any sublicense… To promptly report back to Licensor any unexpected or unforeseen AI Output blah blah blah.
<br/>Notwithstanding anything to the contrary in this Agreement, if Licensee initiates litigation, arbitration, or other legal action against any Third Party (including a cross-claim or counterclaim in a lawsuit) based on material included in such Third Party’s ImpACT Report, then any licenses granted to Licensee under this License will terminate immediately as of the date such litigation, arbitration, or other legal action is filed.
<br/>Proprietary Rights.
<br/>Other than the License granted in Section 2, Licensor and its licensors retain all right, title and interest in and to the Licensed IP and all components thereof, including all patent, copyright, trademark, and trade secret rights, whether such rights are registered or unregistered, and wherever in the world those rights may exist and in any derivatives, modifications and enhancements thereto other than AI Evolutions (collectively, the “Licensor Rights”). Licensee will not commit any act or omission, or permit or induce any Third Party to commit any act or omission, inconsistent with the Licensor Rights. Licensor or its licensors own all graphics, user and visual interfaces, images, code, applications, and text, as well as the design, structure, selection, coordination, expression, "look and feel", and arrangement of the Licensed IP and its content, and the trademarks, service marks, proprietary logos and other distinctive brand features found in the AI Solution or Training Data (collectively, the “Licensor Marks”). All rights are expressly reserved by Licensor.
<br/>AI Output and AI Evolutions: Subject to Licensee’s compliance with Section 3b above, Licensor transfers and assigns to Licensee all AI Output and AI Evolutions derived by Licensee from the Licensed IP (collectively, the “Assigned IP”).
<br/>Production Data: For avoidance of doubt, Production Data will remain under ownership and control of Licensee.
<br/>
<br/>Termination
<br/>
<br/>Term: Your License to use the AI Components will continue from the date you accept this Agreement until [Date], unless earlier terminated by Licensor in accordance with the terms of this Agreement (the “Term”).
<br/>
<br/>Termination: Licensor may terminate this Agreement by written notice at any time if Licensee does not comply with any of its obligations under this Agreement and fails to cure such failure to Licensor’s satisfaction within thirty (30) days after such notice.
<br/>Upon such termination, Licensor will have the right to:
<br/>
<br/>Terminate the License and disable any AI Solution or Training Data either by pre-installed or then installed disabling instructions, and to take immediate possession of the AI Solution or Training Data and all copies wherever located, without demand or notice;
<br/>
<br/>Require Licensee to immediately return to Licensor all copies of the Licensed IP, or upon request by Licensor destroy the Licensed IP and all copies and certify in writing that they have been destroyed;
<br/>
<br/>release/delete any and all data collected through use of the Licensed IP; and
<br/>
<br/>notify all parties affected by use of the Licensed IP.
<br/>
<br/>Further, upon such termination, Licensee agrees that it:
<br/>
<br/>Will, for a period of 1 year after such termination, provide a prominent notice on the Licensee’s website indicating that this Agreement was violated by the Licensee and Licensee’s rights to use the AI Components were terminated by Licensor;
<br/>
<br/>Hereby authorizes Licensor to post a similar notice on Licensor’s own website in accordance with the immediately preceding section; and
<br/>
<br/>Will reconvey and reassign to Licensor all Assigned IP.
<br/>
<br/>Termination of this License Agreement will be in addition to and not in lieu of any other remedies available to Licensor. Licensor expressly reserves the right to pursue all legal and equitable remedies available under the law.
<br/>Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Licensed IP on an "As-Is" basis, without WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. Licensee is solely responsible for determining the appropriateness of using or redistributing an AI Component and assumes any risks associated with Licensee's exercise of permissions under this License.
<br/>Include Licensor warranty that they also comply with the terms of 3b…
<br/>Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, will Licensor be liable to Licensee or any Third Party for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this Agreement or out of the use or inability to use any AI Components (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if Licensee or any Third Party has been advised of the possibility of such damages.
<br/>Indemnification for Third Party-Claims. To the extent permitted by applicable law, Licensee will defend and indemnify Licensor and Licensor’s respective officers, directors, employees, and agents from and against any and all Third Party claims, lawsuits, and proceedings that arise or result from (i) Licensee’s breach of this Agreement, (ii) Licensee’s use, distribution and/or licensing of the AI Components; or (iii) Licensee’s failure or alleged failure to comply with applicable laws or any violation of a Third party’s rights in connection with Licensee’s use of the AI Components.
<br/>Confidentiality.  Licensee and Licensor will maintain the confidentiality of Confidential Information.  The receiving party of any Confidential Information of the other party agrees not to use such Confidential Information for any purpose except as necessary to fulfill its obligations and exercise its rights under this Agreement.  The receiving party will protect the secrecy of and prevent disclosure and unauthorized use of the disclosing party's Confidential Information using the same degree of care that it takes to protect its own confidential information and in no event will use less than reasonable care.  The terms of this Confidentiality section will survive termination of this Agreement.  Upon termination or expiration of this Agreement, the receiving party will, at the disclosing party’s option, promptly return or destroy (and provide written certification of such destruction) the disclosing party’s Confidential Information.
<br/>
<br/>Use of Name/Badge of Honor: [put here idea that Licensee may disclose where they got the software and that it complies with ethical awesomeness]
<br/>
<br/>LICENSEE HAS READ, UNDERSTOOD, AND ACKNOWLEDGES THE FOREGOING AGREEMENT AND AGREES TO BE BOUND BY ALL OF ITS TERMS AND CONDITIONS.  LICENSEE HAS FULL AUTHORITY TO EXECUTE THIS AGREEMENT.  PLEASE MANIFEST YOUR ASSENT TO THIS AGREEMENT BY CLICKING ON THE APPROPRIATE LINK BELOW.
<br/>             I HAVE READ AND UNDERSTOOD AND I ACCEPT THIS AGREEMENT   _______
<br/>             I DO NOT ACCEPT THIS AGREEMENT                                                           _______
<br/>
            </Code>


        </React.Fragment>
    );
};
