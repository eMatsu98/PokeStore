import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPokemonComponent } from './upload-pokemon.component';

describe('UploadPokemonComponent', () => {
  let component: UploadPokemonComponent;
  let fixture: ComponentFixture<UploadPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
