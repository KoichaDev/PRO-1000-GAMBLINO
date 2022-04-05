import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import { FormToggle, PanelBody, PanelRow } from '@wordpress/components';

const ToggleTableCells = (props) => {

    const {
        useCaption,
        toggleCaption,
        useColHeadings,
        toggleColHeadings,
        useRowHeadings,
        toggleRowHeadings,
        useFooter,
        toggleFooter
    } = props;

    return (
        <InspectorControls>
            <PanelBody title={__('Table Options', 'block-gamblino')}>
                <PanelRow>
                    <label for='toggle-caption'>{__('Include a Caption')}</label>
                    <FormToggle
                        id='toggle-caption'
                        checked={useCaption}
                        onChange={toggleCaption}
                    />
                </PanelRow>
                <PanelRow>
                    <label for='toggle-col-headings'>{__('Include Column Headings')}</label>
                    <FormToggle
                        id='toggle-col-headings'
                        checked={useColHeadings}
                        onChange={toggleColHeadings}
                    />
                </PanelRow>
                <PanelRow>
                    <label for='toggle-row-headings'>{__('Include Row Headings')}</label>
                    <FormToggle
                        id='toggle-row-headings'
                        checked={useRowHeadings}
                        onChange={toggleRowHeadings}
                    />
                </PanelRow>
                <PanelRow>
                    <label for='toggle-footer'>{__('Include a Footer')}</label>
                    <FormToggle
                        id='toggle-footer'
                        checked={useFooter}
                        onChange={toggleFooter}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}

export default ToggleTableCells