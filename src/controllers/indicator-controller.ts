import { Controller, Get } from '@nestjs/common';
import { IndicatorsService } from 'src/services/indicators.service';

@Controller('indicators')
export class IndicatorController {
  constructor(private readonly indicatorService: IndicatorsService) {}

  @Get()
  async getIndicators() {
    const totalAreaFazenda = await this.indicatorService.getAreaTotalFazenda();
    const qtdFazendas = await this.indicatorService.getQtdFazendas();
    const culturasPorEstado =
      await this.indicatorService.getCulturasPorEstado();

    return { totalAreaFazenda, qtdFazendas, culturasPorEstado };
  }
}
