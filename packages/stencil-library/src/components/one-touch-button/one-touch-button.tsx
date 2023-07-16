import { Component, Event, EventEmitter, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'one-touch-button',
  styleUrl: 'one-touch-button.css',
  shadow: true,
})
export class OneTouchButton {
  @Prop() label: string;
  @Prop() variant: string;
  @Event() btnClick: EventEmitter<any>;

  // @Listen('click')
  // handleClick(e) {
  //   this.onClick.bind(this, e);
  // }
  @Listen('click')
  handleClick(ev) {
    console.log('the button was clicked', ev);
    this.btnClick.emit(ev)
  }
  render() {
    return (
      <button class={this.variant} onClick={this.handleClick.bind(this)}>
        {this.label}
      </button>
    );
  }

}
