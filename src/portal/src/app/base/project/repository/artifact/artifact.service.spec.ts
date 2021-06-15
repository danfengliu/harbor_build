import { TestBed, inject } from '@angular/core/testing';
import { ArtifactDefaultService, ArtifactService } from "./artifact.service";
import { IconService } from '../../../../../../ng-swagger-gen/services/icon.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedTestingModule } from "../../../../shared/shared.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('ArtifactService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        ArtifactDefaultService,
        {
          provide: ArtifactService,
          useClass: ArtifactDefaultService
        },
        IconService,
        DomSanitizer
      ]
    });
  });

  it('should be initialized', inject([ArtifactDefaultService], (service: ArtifactService) => {
    expect(service).toBeTruthy();
  }));

});
