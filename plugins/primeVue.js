import Accordion from '@/components/lib/accordion/Accordion';
import AccordionTab from '@/components/lib/accordiontab/AccordionTab';
import AutoComplete from '@/components/lib/autocomplete/AutoComplete';
import Avatar from '@/components/lib/avatar/Avatar';
import AvatarGroup from '@/components/lib/avatargroup/AvatarGroup';
import Badge from '@/components/lib/badge/Badge';
import BadgeDirective from '@/components/lib/badgedirective/BadgeDirective';
import BlockUI from '@/components/lib/blockui/BlockUI';
import Breadcrumb from '@/components/lib/breadcrumb/Breadcrumb';
import Button from '@/components/lib/button/Button';
import Calendar from '@/components/lib/calendar/Calendar';
import Card from '@/components/lib/card/Card';
import Carousel from '@/components/lib/carousel/Carousel';
import CascadeSelect from '@/components/lib/cascadeselect/CascadeSelect';
import Chart from '@/components/lib/chart/Chart';
import Checkbox from '@/components/lib/checkbox/Checkbox';
import Chip from '@/components/lib/chip/Chip';
import Chips from '@/components/lib/chips/Chips';
import ColorPicker from '@/components/lib/colorpicker/ColorPicker';
import Column from '@/components/lib/column/Column';
import ColumnGroup from '@/components/lib/columngroup/ColumnGroup';
import PrimeVue from '@/components/lib/config/PrimeVue';
import ConfirmationService from '@/components/lib/confirmationservice/ConfirmationService';
import ConfirmDialog from '@/components/lib/confirmdialog/ConfirmDialog';
import ConfirmPopup from '@/components/lib/confirmpopup/ConfirmPopup';
import ContextMenu from '@/components/lib/contextmenu/ContextMenu';
import DataTable from '@/components/lib/datatable/DataTable';
import DataView from '@/components/lib/dataview/DataView';
import DataViewLayoutOptions from '@/components/lib/dataviewlayoutoptions/DataViewLayoutOptions';
import DeferredContent from '@/components/lib/deferredcontent/DeferredContent';
import Dialog from '@/components/lib/dialog/Dialog';
import DialogService from '@/components/lib/dialogservice/DialogService';
import Divider from '@/components/lib/divider/Divider';
import Dock from '@/components/lib/dock/Dock';
import Dropdown from '@/components/lib/dropdown/Dropdown';
import DynamicDialog from '@/components/lib/dynamicdialog/DynamicDialog';
import Editor from '@/components/lib/editor/Editor';
import Fieldset from '@/components/lib/fieldset/Fieldset';
import FileUpload from '@/components/lib/fileupload/FileUpload';
import FocusTrap from '@/components/lib/focustrap/FocusTrap';
import Galleria from '@/components/lib/galleria/Galleria';
import Image from '@/components/lib/image/Image';
import InlineMessage from '@/components/lib/inlinemessage/InlineMessage';
import Inplace from '@/components/lib/inplace/Inplace';
import InputMask from '@/components/lib/inputmask/InputMask';
import InputNumber from '@/components/lib/inputnumber/InputNumber';
import InputSwitch from '@/components/lib/inputswitch/InputSwitch';
import InputText from '@/components/lib/inputtext/InputText';
import Knob from '@/components/lib/knob/Knob';
import Listbox from '@/components/lib/listbox/Listbox';
import MegaMenu from '@/components/lib/megamenu/MegaMenu';
import Menu from '@/components/lib/menu/Menu';
import Menubar from '@/components/lib/menubar/Menubar';
import Message from '@/components/lib/message/Message';
import MultiSelect from '@/components/lib/multiselect/MultiSelect';
import OrderList from '@/components/lib/orderlist/OrderList';
import OrganizationChart from '@/components/lib/organizationchart/OrganizationChart';
import OverlayPanel from '@/components/lib/overlaypanel/OverlayPanel';
import Paginator from '@/components/lib/paginator/Paginator';
import Panel from '@/components/lib/panel/Panel';
import PanelMenu from '@/components/lib/panelmenu/PanelMenu';
import Password from '@/components/lib/password/Password';
import PickList from '@/components/lib/picklist/PickList';
import ProgressBar from '@/components/lib/progressbar/ProgressBar';
import ProgressSpinner from '@/components/lib/progressspinner/ProgressSpinner';
import RadioButton from '@/components/lib/radiobutton/RadioButton';
import Rating from '@/components/lib/rating/Rating';
import Ripple from '@/components/lib/ripple/Ripple';
import Row from '@/components/lib/row/Row';
import ScrollPanel from '@/components/lib/scrollpanel/ScrollPanel';
import ScrollTop from '@/components/lib/scrolltop/ScrollTop';
import SelectButton from '@/components/lib/selectbutton/SelectButton';
import Sidebar from '@/components/lib/sidebar/Sidebar';
import Skeleton from '@/components/lib/skeleton/Skeleton';
import Slider from '@/components/lib/slider/Slider';
import SpeedDial from '@/components/lib/speeddial/SpeedDial';
import SplitButton from '@/components/lib/splitbutton/SplitButton';
import Splitter from '@/components/lib/splitter/Splitter';
import SplitterPanel from '@/components/lib/splitterpanel/SplitterPanel';
import Steps from '@/components/lib/steps/Steps';
import StyleClass from '@/components/lib/styleclass/StyleClass';
import TabMenu from '@/components/lib/tabmenu/TabMenu';
import TabPanel from '@/components/lib/tabpanel/TabPanel';
import TabView from '@/components/lib/tabview/TabView';
import Tag from '@/components/lib/tag/Tag';
import Terminal from '@/components/lib/terminal/Terminal';
import Textarea from '@/components/lib/textarea/Textarea';
import TieredMenu from '@/components/lib/tieredmenu/TieredMenu';
import Timeline from '@/components/lib/timeline/Timeline';
import Toast from '@/components/lib/toast/Toast';
import ToastService from '@/components/lib/toastservice/ToastService';
import ToggleButton from '@/components/lib/togglebutton/ToggleButton';
import Toolbar from '@/components/lib/toolbar/Toolbar';
import Tooltip from '@/components/lib/tooltip/Tooltip';
import Tree from '@/components/lib/tree/Tree';
import TreeSelect from '@/components/lib/treeselect/TreeSelect';
import TreeTable from '@/components/lib/treetable/TreeTable';
import TriStateCheckbox from '@/components/lib/tristatecheckbox/TriStateCheckbox';
import VirtualScroller from '@/components/lib/virtualscroller/VirtualScroller';

import DocApiSection from '@/components/doc/DocApiSection';
import DocComponent from '@/components/doc/DocComponent';
import DocSectionCode from '@/components/doc/DocSectionCode';
import DocSectionNav from '@/components/doc/DocSectionNav';
import DocSections from '@/components/doc/DocSections';
import DocSectionText from '@/components/doc/DocSectionText';
import CodeHighlight from '@/components/layout/CodeHighlight';
import DevelopmentSection from '@/components/layout/DevelopmentSection';

const tailwindLight = {
    //PANELS
    panel: {
        header: ({ props }) => ({
            class: [
                'flex items-center justify-between', // flex and alignments
                'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
            ]
        }),
        title: {
            class: ['leading-none font-bold']
        },
        toggler: {
            class: [
                'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
            ]
        },
        togglerIcon: {
            class: ['inline-block']
        },
        content: {
            class: [
                'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
            ] // padding, borders, and colors
        }
    },
    accordion: {
        root: {
            class: ['mb-1']
        },
        header: ({ props }) => ({
            class: [
                { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled } // Condition
            ]
        }),
        headerAction: ({ context }) => ({
            class: [
                'flex items-center cursor-pointer relative no-underline select-none', // Alignments
                'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200', // Padding and transition
                'border border-gray-300 bg-gray-100 text-gray-600', // Borders and colors
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Dark mode
                'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800', // Hover
                'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                { 'rounded-br-md rounded-bl-md': !context.active, 'rounded-br-0 rounded-bl-0 text-gray-800': context.active } // Condition
            ]
        }),
        headerIcon: {
            class: ['inline-block mr-2']
        },
        headerTitle: {
            class: ['leading-none']
        },
        content: {
            class: [
                'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
            ]
        }
    },
    card: {
        root: {
            class: [
                'bg-white text-gray-700 shadow-md rounded-md', // Background, text color, box shadow, and border radius.
                'dark:bg-gray-900 dark:text-white ' //dark
            ]
        },
        body: {
            class: 'p-5' // Padding.
        },
        title: {
            class: 'text-2xl font-bold mb-2' // Font size, font weight, and margin bottom.
        },
        subtitle: {
            class: [
                'font-normal mb-2 text-gray-600', // Font weight, margin bottom, and text color.
                'dark:text-white/60 ' //dark
            ]
        },
        content: {
            class: 'py-5' // Vertical padding.
        },
        footer: {
            class: 'pt-5' // Top padding.
        }
    },
    divider: {
        root: ({ props }) => ({
            class: [
                'flex relative', // alignments.
                {
                    'w-full my-5 mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-gray-300 before:dark:border-blue-900/40': props.layout == 'horizontal', // Padding and borders for horizontal layout.
                    'justify-center min-h-full mx-4 md:mx-5 py-5 before:block before:min-h-full before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2 before:border-l before:border-gray-300 before:dark:border-blue-900/40':
                        props.layout == 'vertical' // Padding and borders for vertical layout.
                },
                { 'before:border-solid': props.type == 'solid', 'before:border-dotted': props.type == 'dotted', 'before:border-dashed': props.type == 'dashed' }, // Border type condition.
                {
                    'justify-center items-center': props.align == 'center' || props.align == null, // Alignment condition for center or default alignment.
                    'justify-end items-center': props.align == 'right', // Alignment condition for right alignment.
                    'justify-start items-center': props.align == 'left', // Alignment condition for left alignment.
                    'items-start': props.align == 'top', // Alignment condition for top alignment.
                    'items-end': props.align == 'bottom' // Alignment condition for bottom alignment.
                }
            ]
        }),
        content: {
            class: 'px-1 bg-white z-10 dark:bg-gray-900' // Padding and background color.
        }
    },
    fieldset: {
        root: {
            class: [
                'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min', // Borders, background, text color, spacing, and inline size.
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //dark
            ]
        },
        legend: ({ props }) => ({
            class: [
                'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ', //dark
                {
                    'p-0 transition-none hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': props.toggleable,
                    'p-5': !props.toggleable
                }
            ]
        }),
        toggler: ({ props }) => ({
            class: [
                'flex items-center justify-center',
                {
                    'p-5 text-gray-700 rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-gray-900 focus:focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:text-white/80 dark:hover:text-white/80 dark:hover:bg-gray-800/60 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                        props.toggleable
                }
            ]
        }),
        togglerIcon: {
            class: 'mr-2 inline-block' // Margin and display style.
        },
        legendTitle: {
            class: 'flex items-center justify-center leading-none' // alignments, and leading style.
        },
        content: {
            class: 'p-5' // Padding.
        }
    },
    scrollpanel: {
        wrapper: {
            class: 'float-left h-full overflow-hidden relative w-full z-10'
        },
        content: {
            class: 'box-border h-[calc(100% + 18px)] overflow-scroll pr-18 pb-18 relative scrollbar-none w-[calc(100% + 18px)] [&::-webkit-scrollbar]:hidden'
        },
        barX: {
            class: 'bg-gray-50 border-0 transition-none invisible absolute bottom-0 h-3 z-2 rounded cursor-pointer opacity-0 relative'
        },
        barY: {
            class: 'bg-gray-50 border-0 transition-none top-0 w-3 h-full z-2 rounded cursor-pointer opacity-0 relative'
        }
    },
    tabview: {
        navContainer: ({ props, context, parent }) => ({
            class: [
                'relative', // Relative positioning.
                console.log(props.scrollable), // Console log (you may remove this if not needed).
                { 'overflow-hidden': props.scrollable } // Overflow condition.
            ]
        }),
        navContent: {
            class: ['overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden'] // Overflow and scrollbar styles.
        },
        previousButton: {
            class: ['h-full flex items-center justify-center absolute top-0 z-20', 'left-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ]'] // Flex and absolute positioning styles.
        },
        nextButton: {
            class: ['h-full flex items-center justify-center absolute top-0 z-20', 'right-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex and absolute positioning styles.
        },
        nav: {
            class: ['flex flex-1 list-none m-0 p-0', 'bg-white border border-gray-300 border-0 border-b-2', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex, list, margin, padding, and border styles.
        },
        header: ({ props }) => ({
            class: ['mr-0', { 'cursor-default pointer-events-none select-none user-select-none opacity-60': props?.disabled }] // Margin and condition-based styles.
        }),
        headerAction: ({ props, context, parent }) => ({
            class: [
                'items-center cursor-pointer flex overflow-hidden relative select-none text-decoration-none user-select-none', // Flex and overflow styles.
                'border-b-2 p-5 font-bold rounded-t-lg transition-shadow duration-200 m-0', // Border, padding, font, and transition styles.
                'transition-colors duration-200', // Transition duration style.
                'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Focus styles.
                {
                    'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80': parent.state.d_activeIndex !== context.index, // Condition-based hover styles.
                    'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': parent.state.d_activeIndex === context.index // Condition-based active styles.
                }
            ],
            style: 'margin-bottom:-2px' // Negative margin style.
        }),
        headerTitle: {
            class: ['leading-none whitespace-nowrap'] // Leading and whitespace styles.
        },
        content: {
            class: ['bg-white p-5 border-0 text-gray-700 rounded-bl-2xl rounded-br-2xl', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'] // Background, padding, border, and text styles.
        }
    },

    //OVERLAYS

    dialog: {
        root: ({ props, state }) => ({
            class: [console.log(state), 'rounded-lg shadow-lg border-0', 'flex flex-col max-h-90 transform scale-100', 'm-0  w-[50vw] z-40 relative', '', 'dark:border dark:border-blue-900/40']
        }),
        header: {
            class: ['flex items-center justify-between flex-shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80']
        },
        headerTitle: {
            class: ['font-bold text-lg']
        },
        headerIcons: {
            class: ['flex items-center']
        },
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: {
            class: ['w-4 h-4 inline-block']
        },
        content: {
            class: ['overflow-y-auto', 'bg-white text-gray-700 px-6 pb-8 pt-0', 'rounded-bl-lg rounded-br-lg', 'dark:bg-gray-900  dark:text-white/80 ']
        },
        footer: {
            class: ['flex-shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80']
        },
        mask: {
            class: ['fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20']
        }
    },
    confirmpopup: {
        root: ({ props, state }) => ({
            class: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-10 absolute left-0 top-0 ',
                // 'before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-l-[5px] before:border-r-[5px] before:border-transparent before:border-b-[10px] before:border-t-[0] before:border-l-[5px] before:border-r-[5px] before:border-b-[0] before:border-red-500',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        }),
        content: {
            class: ['p-5 items-center flex']
        },
        icon: {
            class: ['text-2xl']
        },
        message: {
            class: ['ml-4']
        },
        footer: {
            class: ['text-right px-5 py-5 pt-0 ']
        }
        // rejectButton: {
        //     class: ['bg-transparent text-blue-500 border-transparent', 'text-sm px-2 py-1.5 ml-0 mr-2 w-auto', 'flex items-center cursor-pointer inline-flex overflow-hidden relative text-center select-none user-select-none align-bottom']
        // },
        // acceptButton: {
        //     class: ['text-white bg-blue-500 border-2 border-blue-500', 'text-sm px-2 py-1.5 ml-0 mr-2 w-auto', 'flex items-center cursor-pointer inline-flex overflow-hidden relative text-center select-none user-select-none align-bottom']
        // }
    },
    overlaypanel: {
        root: ({ props, state }) => ({
            class: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-10 absolute left-0 top-0 ',
                // 'before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-t-[10px] before:border-l-[5px] before:border-r-[5px] before:border-transparent before:border-b-[10px] before:border-t-[0] before:border-l-[5px] before:border-r-[5px] before:border-b-[0] before:border-red-500',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        }),
        content: {
            class: ['p-5 items-center flex']
        }
    },
    sidebar: {
        root: ({ props, state }) => ({
            class: [
                console.log(props),
                'flex flex-col pointer-events-auto relative transform translate-z-0 transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                { 'h-full w-80': props.position == 'left' || props.position == 'right', 'h-40 w-full': props.position == 'top' || props.position == 'bottom' },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        }),
        header: {
            class: ['flex items-center justify-end', 'p-5']
        },
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: {
            class: ['w-4 h-4 inline-block']
        },
        content: {
            class: ['p-5 pt-0 h-full w-full', 'flex-grow overflow-y-auto']
        },
        mask: ({ props, state }) => ({
            class: [
                'fixed top-0 left-0 w-full h-full flex  pointer-events-auto',
                'bg-black bg-opacity-40 transition duration-200 z-20',
                { 'justify-end': props.position == 'right', 'items-start': props.position == 'top', 'items-end': props.position == 'bottom' }
            ]
        })
    },

    //UPLOAD

    fileupload: {
        input: {
            class: ['hidden']
        },
        buttonbar: {
            class: ['flex flex-wrap', 'bg-gray-50 p-5 border border-solid border-gray-300 text-gray-700 rounded-tr-lg rounded-tl-lg gap-2 border-b-0']
        },
        chooseButton: {
            class: ['text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative']
        },
        chooseIcon: {
            class: ['mr-2 inline-block']
        },
        chooseButtonLabel: {
            class: ['flex-1 font-bold']
        },
        content: ({ props }) => ({
            class: ['relative', 'bg-white p-8 border border-gray-300 text-gray-700 rounded-b-lg']
        }),
        file: {
            class: ['flex items-center flex-wrap', 'p-4 border border-gray-300 rounded gap-2 mb-2', 'last:mb-0']
        },
        thumbnail: {
            class: ['flex-shrink-0']
        },
        fileName: {
            class: ['mb-2']
        },
        fileSize: {
            class: ['mr-2']
        }
    },

    //BUTTONS

    button: {
        root: ({ props }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
                'transition duration-200 ease-in-out',
                {
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': !props.link && props.severity == null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent': props.link
                },
                {
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.severity == 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600': props.severity == 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': props.severity == 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600': props.severity == 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purple-600': props.severity == 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600': props.severity == 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && props.severity == null && !props.plain,
                    'text-gray-500 hover:bg-gray-300/20': props.text && props.severity == 'secondary' && !props.plain,
                    'text-green-500 hover:bg-green-300/20': props.text && props.severity == 'success' && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && props.severity == 'info' && !props.plain,
                    'text-orange-500 hover:bg-orange-300/20': props.text && props.severity == 'warning' && !props.plain,
                    'text-purple-500 hover:bg-purple-300/20': props.text && props.severity == 'help' && !props.plain,
                    'text-red-500 hover:bg-red-300/20': props.text && props.severity == 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain & props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain & props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain & !props.outlined & !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && props.severity == null && !props.plain,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.outlined && props.severity == 'secondary' && !props.plain,
                    'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity == 'success' && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && props.severity == 'info' && !props.plain,
                    'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity == 'warning' && !props.plain,
                    'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity == 'help' && !props.plain,
                    'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity == 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size == null, 'text-xs py-2 px-3': props.size == 'small', 'text-xl py-3 px-4': props.size == 'large' }
            ]
        }),
        label: ({ props }) => ({
            class: ['flex-1', 'duration-200', 'font-bold', { 'hover:underline': props.link }]
        }),
        icon: ({ props }) => ({
            class: [
                'mx-0',
                { 'mr-2': props.iconPos == 'left' && props.label != null, 'ml-2': props.iconPos == 'right' && props.label != null, 'mb-2': props.iconPos == 'top' && props.label != null, 'mt-2': props.iconPos == 'bottom' && props.label != null }
            ]
        }),
        badge: ({ props }) => ({
            class: [{ 'ml-2 w-4 h-4 leading-none': props.badge }]
        })
    },

    //MISC

    badge: {
        root: ({ props }) => ({
            class: [
                console.log(props),
                'rounded-full p-0 text-center inline-block',
                'bg-blue-500 text-white font-bold',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                { 'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null, 'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large', 'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge' }
            ]
        })
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, pt: tailwindLight });

    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
    nuxtApp.vueApp.use(DialogService);

    nuxtApp.vueApp.directive('badge', BadgeDirective);
    nuxtApp.vueApp.directive('tooltip', Tooltip);
    nuxtApp.vueApp.directive('ripple', Ripple);
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('focustrap', FocusTrap);
    nuxtApp.vueApp.directive('code', CodeHighlight);

    nuxtApp.vueApp.component('Accordion', Accordion);
    nuxtApp.vueApp.component('AccordionTab', AccordionTab);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('AvatarGroup', AvatarGroup);
    nuxtApp.vueApp.component('AutoComplete', AutoComplete);
    nuxtApp.vueApp.component('Badge', Badge);
    nuxtApp.vueApp.component('BlockUI', BlockUI);
    nuxtApp.vueApp.component('Breadcrumb', Breadcrumb);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('Calendar', Calendar);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Carousel', Carousel);
    nuxtApp.vueApp.component('CascadeSelect', CascadeSelect);
    nuxtApp.vueApp.component('Chart', Chart);
    nuxtApp.vueApp.component('Checkbox', Checkbox);
    nuxtApp.vueApp.component('Chip', Chip);
    nuxtApp.vueApp.component('Chips', Chips);
    nuxtApp.vueApp.component('ColorPicker', ColorPicker);
    nuxtApp.vueApp.component('Column', Column);
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
    nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog);
    nuxtApp.vueApp.component('ConfirmPopup', ConfirmPopup);
    nuxtApp.vueApp.component('ContextMenu', ContextMenu);
    nuxtApp.vueApp.component('DataTable', DataTable);
    nuxtApp.vueApp.component('DataView', DataView);
    nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions);
    nuxtApp.vueApp.component('DeferredContent', DeferredContent);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('DynamicDialog', DynamicDialog);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Dock', Dock);
    nuxtApp.vueApp.component('Dropdown', Dropdown);
    nuxtApp.vueApp.component('Editor', Editor);
    nuxtApp.vueApp.component('Fieldset', Fieldset);
    nuxtApp.vueApp.component('FileUpload', FileUpload);
    nuxtApp.vueApp.component('Image', Image);
    nuxtApp.vueApp.component('InlineMessage', InlineMessage);
    nuxtApp.vueApp.component('Inplace', Inplace);
    nuxtApp.vueApp.component('InputMask', InputMask);
    nuxtApp.vueApp.component('InputNumber', InputNumber);
    nuxtApp.vueApp.component('InputSwitch', InputSwitch);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Knob', Knob);
    nuxtApp.vueApp.component('Listbox', Listbox);
    nuxtApp.vueApp.component('MegaMenu', MegaMenu);
    nuxtApp.vueApp.component('Menu', Menu);
    nuxtApp.vueApp.component('Menubar', Menubar);
    nuxtApp.vueApp.component('Message', Message);
    nuxtApp.vueApp.component('MultiSelect', MultiSelect);
    nuxtApp.vueApp.component('OrderList', OrderList);
    nuxtApp.vueApp.component('OrganizationChart', OrganizationChart);
    nuxtApp.vueApp.component('OverlayPanel', OverlayPanel);
    nuxtApp.vueApp.component('Paginator', Paginator);
    nuxtApp.vueApp.component('Panel', Panel);
    nuxtApp.vueApp.component('PanelMenu', PanelMenu);
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('PickList', PickList);
    nuxtApp.vueApp.component('ProgressBar', ProgressBar);
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner);
    nuxtApp.vueApp.component('RadioButton', RadioButton);
    nuxtApp.vueApp.component('Rating', Rating);
    nuxtApp.vueApp.component('Row', Row);
    nuxtApp.vueApp.component('ScrollPanel', ScrollPanel);
    nuxtApp.vueApp.component('ScrollTop', ScrollTop);
    nuxtApp.vueApp.component('SelectButton', SelectButton);
    nuxtApp.vueApp.component('Slider', Slider);
    nuxtApp.vueApp.component('Sidebar', Sidebar);
    nuxtApp.vueApp.component('Skeleton', Skeleton);
    nuxtApp.vueApp.component('SpeedDial', SpeedDial);
    nuxtApp.vueApp.component('SplitButton', SplitButton);
    nuxtApp.vueApp.component('Splitter', Splitter);
    nuxtApp.vueApp.component('SplitterPanel', SplitterPanel);
    nuxtApp.vueApp.component('Steps', Steps);
    nuxtApp.vueApp.component('TabView', TabView);
    nuxtApp.vueApp.component('TabPanel', TabPanel);
    nuxtApp.vueApp.component('TabMenu', TabMenu);
    nuxtApp.vueApp.component('Tag', Tag);
    nuxtApp.vueApp.component('Terminal', Terminal);
    nuxtApp.vueApp.component('Textarea', Textarea);
    nuxtApp.vueApp.component('TieredMenu', TieredMenu);
    nuxtApp.vueApp.component('Timeline', Timeline);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Toolbar', Toolbar);
    nuxtApp.vueApp.component('ToggleButton', ToggleButton);
    nuxtApp.vueApp.component('Tree', Tree);
    nuxtApp.vueApp.component('TreeSelect', TreeSelect);
    nuxtApp.vueApp.component('TreeTable', TreeTable);
    nuxtApp.vueApp.component('TriStateCheckbox', TriStateCheckbox);
    nuxtApp.vueApp.component('Galleria', Galleria);
    nuxtApp.vueApp.component('VirtualScroller', VirtualScroller);

    nuxtApp.vueApp.component('DocSections', DocSections);
    nuxtApp.vueApp.component('DocSectionText', DocSectionText);
    nuxtApp.vueApp.component('DocSectionCode', DocSectionCode);
    nuxtApp.vueApp.component('DocSectionNav', DocSectionNav);
    nuxtApp.vueApp.component('DocApiSection', DocApiSection);
    nuxtApp.vueApp.component('DocComponent', DocComponent);

    nuxtApp.vueApp.component('DevelopmentSection', DevelopmentSection);
});
