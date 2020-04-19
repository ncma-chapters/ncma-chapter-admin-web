// Node modules.
import uuidv4 from 'uuid/v4';

// ===================
// Actions' constants.
// ===================
export const CREATE_EVENT = 'containers/Events/CREATE_EVENT';
export const CREATE_EVENT_FAILURE = 'containers/Events/CREATE_EVENT_FAILURE';
export const CREATE_EVENT_SUCCESS = 'containers/Events/CREATE_EVENT_SUCCESS';
export const DELETE_EVENT = 'containers/Events/DELETE_EVENT';
export const DELETE_EVENT_FAILURE = 'containers/Events/DELETE_EVENT_FAILURE';
export const DELETE_EVENT_SUCCESS = 'containers/Events/DELETE_EVENT_SUCCESS';
export const FETCH_EVENTS = 'containers/Events/FETCH_EVENTS';
export const FETCH_EVENTS_FAILURE = 'containers/Events/FETCH_EVENTS_FAILURE';
export const FETCH_EVENTS_SUCCESS = 'containers/Events/FETCH_EVENTS_SUCCESS';
export const SELECT_EVENT = 'containers/Events/SELECT_EVENT';
export const UPDATE_EVENT = 'containers/Events/UPDATE_EVENT';
export const UPDATE_EVENT_FAILURE = 'containers/Events/UPDATE_EVENT_FAILURE';
export const UPDATE_EVENT_SUCCESS = 'containers/Events/UPDATE_EVENT_SUCCESS';

// ===================
// Fake event model.
// ===================
export const FAKE_EVENT = {
  capacity: 2000,
  certificationCredits: 'not sure what this field does',
  description: `<div id='lipsum'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus mauris et arcu efficitur fermentum vitae sed elit. Praesent id vehicula massa. Praesent at ultricies ipsum. Etiam rutrum vel dolor nec efficitur. Sed placerat auctor facilisis. Praesent egestas ante facilisis nibh aliquam, a placerat lacus tincidunt. Quisque nec lectus porta, varius nibh in, sodales quam. Quisque pellentesque eleifend risus, vitae convallis nisl pharetra eu. Curabitur dignissim libero vel risus eleifend interdum. Maecenas pellentesque libero ac risus vulputate, hendrerit ultrices sapien iaculis. Proin suscipit ligula a augue suscipit ornare. Suspendisse potenti. Aliquam convallis et dui sit amet dictum. Vivamus in rhoncus diam.</p><p>In eu semper neque, a eleifend risus. Etiam iaculis egestas sapien, quis sollicitudin nunc sollicitudin vel. Curabitur varius justo in mauris malesuada egestas. Mauris interdum, ligula non aliquet fermentum, purus quam finibus sapien, nec varius leo quam at erat. Cras vitae libero porttitor, bibendum orci sed, venenatis tortor. Vivamus tempor rutrum porttitor. Phasellus posuere, nisl sit amet euismod condimentum, nisi ipsum auctor ligula, vitae suscipit risus mauris in nunc. Morbi auctor id mi nec pharetra. Cras pulvinar a tellus ut mollis. Mauris tempor ultrices dui quis cursus. Donec ultricies tellus ut nibh convallis semper. Etiam in lorem nisi. In tincidunt tellus sit amet tellus efficitur faucibus. Nam fermentum quam nec ultrices finibus. Nunc consequat semper convallis. Nunc placerat volutpat malesuada.</p><p>Curabitur iaculis rhoncus sapien varius congue. Morbi a rhoncus eros, ut efficitur nunc. Nunc vel massa vitae dolor mattis rutrum. Vestibulum nulla felis, lobortis et pellentesque at, interdum vitae dui. Aenean dolor arcu, ultricies eu nulla in, venenatis finibus neque. Vestibulum egestas accumsan ipsum, a dictum dolor dignissim in. Sed egestas lacinia massa et tincidunt. Etiam dolor urna, eleifend ut libero sit amet, auctor porttitor diam.</p><p>Maecenas odio lacus, mollis eget mattis id, gravida sed risus. Vivamus efficitur elit vel augue mattis, ac varius enim tincidunt. Nulla eu massa in quam tempus sagittis. Curabitur auctor enim non nisl tincidunt, eget pellentesque risus tempor. Maecenas feugiat pulvinar ante, eget convallis erat cursus id. Morbi nibh eros, fringilla et felis sed, cursus euismod diam. Morbi rutrum dolor vel urna tempus, id finibus sapien imperdiet. Proin gravida felis a ligula malesuada mattis. Sed viverra sapien in lacus ultrices, et aliquet risus eleifend. Integer semper lorem quis gravida facilisis. Sed at urna a metus posuere tincidunt. Nunc lobortis sagittis metus, nec viverra mauris faucibus sit amet. Aliquam fringilla tristique nibh, quis ullamcorper magna aliquet sed.</p><p>Sed ac purus sit amet urna auctor tristique eu ut nisl. Morbi condimentum, felis vel sodales suscipit, lorem purus lacinia est, at venenatis augue enim non urna. Sed commodo, libero sit amet volutpat interdum, mi enim sodales magna, vulputate efficitur purus quam in est. Mauris in congue erat. Donec euismod laoreet dui nec lacinia. Nulla ultricies libero ac magna egestas, ac porta turpis mollis. Quisque leo enim, ornare auctor urna quis, euismod laoreet turpis. Aenean purus neque, convallis sed rutrum dignissim, placerat quis purus. Quisque nec vestibulum libero, sed tincidunt risus. Suspendisse magna arcu, consectetur consequat rhoncus sit amet, egestas rhoncus ligula. Curabitur vel ultrices sem, sed ultricies diam. Suspendisse in quam facilisis, eleifend arcu eget, congue velit. Proin viverra lacus in est blandit, ut dictum tortor dapibus. Suspendisse consectetur quam at lacus venenatis, quis pulvinar neque tempus.</p></div>`,
  draft: false,
  endsAt: '2020-04-19T19:36:28.382Z',
  id: uuidv4(),
  imageURL: `https://lh6.googleusercontent.com/proxy/azyeZBc4GFuIhJjlHdA6_m41Z8CqGQqv87roWMXtF3BOp80d5vCApAwwvNdTw8MHJw_0xbYgj8IoXG2PMejLmua9hRyi9GN-8_NIEg=w3840-h2160-p-k-no-nd-mv`,
  shortDescription: `Curabitur iaculis rhoncus sapien varius congue. Morbi a rhoncus eros, ut efficitur nunc. Nunc vel massa vitae dolor mattis rutrum. Vestibulum nulla felis, lobortis et pellentesque at, interdum vitae dui.`,
  startsAt: '2020-04-19T17:36:28.382Z',
  tagIDs: ['tag1', 'tag2'],
  title: 'An Example Event',
  venueID: 'd71b2aca-577b-463e-bdc2-40687fbae365',
};
