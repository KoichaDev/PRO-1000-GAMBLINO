import styled from 'styled-components';

export const Table = styled.table`
    border: 1px solid #777;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    text-align: left;
    border-spacing:0;

    caption, td, th, tfoot {
        border:1px solid #ddd;
        border-bottom:none;
        text-align:left;
    }

    caption {
        border: 1px solid #777;
        border-bottom: none;
        text-align: left;
    }

    caption, tfoot {
        background:#fff;
    }
    
    th {
        background:#ddd;
    }

    td, th {
        height:2em;
    }
    tbody {
        border:none;
    }
    tbody tr:nth-child(even) {
        background: #f0eade;
    }

    tfoot {
        background: #fff;
        border: 1px solid #777;
        border-bottom: none;
        text-align: left;
    }

    tfoot td {
        font-style:italic;
        font-weight:normal;
    }

    caption {
        font-size: 1.5em;
        margin: .5em 0 .75em;
    }

    tr {
        border: 1px solid #ddd;
        padding: .35em;
    }

    th,td {
        padding: .625em;
        text-align: center;
    }

    th {
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
        background-color: #ddd;
    }

    
    @media screen and (max-width: 600px) {
        table {
            border: 0;

            caption {
                font-size: 1.3em;
            }

            thead {
                border: none;
                clip: rect(0 0 0 0);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }

            tr {
                border-bottom: 3px solid #ddd;
                display: block;
                margin-bottom: .625em;
            }

            td {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: .8em;
                text-align: right;

                &::before {
                    /*
                    * aria-label has no advantage, it won't be read inside a table
                    content: attr(aria-label);
                    */
                    content: attr(data-label);
                    float: left;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                &:last-child {
                    border-bottom: 0;
                }
            }
        }        
    }
`;